import React from "react";

import classes from "./RecipeForm.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const recipeForm = (props) => {
  const formElementsArray = [];
  for (let key in props.recipeData) {
    formElementsArray.push({
      id: key,
      config: props.recipeData[key],
    });
  }

  let form = (
    <div className={classes.RecipeForm}>
        <form>
          {formElementsArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              label={formElement.config.label}
              class={formElement.config.class}
              changed={(event) => props.changed(event, formElement.id)}
              fileChanged={props.fileChanged}
            />
          ))}

          <Button clicked={props.formSubmitted}
          disabled={props.disabled}>ADD</Button>
        </form>
        
    </div>
  );

  return form;
};

export default recipeForm;
