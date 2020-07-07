import React from "react";

import classes from "./OpenRecipe.css";

const openRecipe = (props) => (
  <div className={classes.OpenRecipe}>
      <h2>{props.recipe.name}</h2>
       <img src={props.recipe.image} alt={props.recipe.name}/>
       <p> <b>Preparation time:</b> {props.recipe.preparation} min</p>
       <p> <b>Cooking time:</b> {props.recipe.cooking} min</p>
       <p> <b>Instructions:</b> {props.recipe.instructions}</p>
     
  </div>
);

export default openRecipe;

