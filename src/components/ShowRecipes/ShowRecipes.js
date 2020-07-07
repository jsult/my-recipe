import React from "react";

import classes from "./ShowRecipes.css";
import ShowRecipe from "./ShowRecipe/ShowRecipe";
import Button from "../UI/Button/Button";
import Aux from "../../hoc/Aux";

const showRecipes = (props) => {
  if (!props.show) {
    return <p> Your recipes will be shown here </p>;
  }

  let transformedRecipes = [];

  for (let item of props.recipesList) {
      if (item.category === props.active || props.active === "All"){
    transformedRecipes.push(
      <ShowRecipe
        name={item.name}
        image={item.image}
        preparation={item.preparation}
        cooking={item.cooking}
        key={item.name}
        clicked={(name) => props.clicked(name)}
      />
    
    );
      }
  }

  let buttons = ["All", "Meat", "Fish", "Vegetarian", "Dessert", "Drink"];
  let transformedButtons = [];
  for (let button in buttons) {
    let category = buttons[button];
    let check = props.active === category;
    transformedButtons.push(
      <Button
        key={category}
        btnType={check ? "" : "Category"}
        clicked={() => props.buttonClicked(category)}
      >
        {category}
      </Button>
    );
  }

  return (
    <Aux>
      <div className={classes.Buttons}>{transformedButtons}</div>
      <div className={classes.ShowRecipes}>{transformedRecipes}</div>
    </Aux>
  );
};

export default showRecipes;
