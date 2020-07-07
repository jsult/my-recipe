import React from "react";

import classes from "./ShowRecipe.css";

const showRecipe = (props) => (
  <div className={classes.ShowRecipe} onClick={() => props.clicked(props.name)}>
    <h3> {props.name} </h3>
    <img src={props.image} alt={props.name} />
    <p> Preparation time: {props.preparation} min </p>
    <p> Cooking time: {props.cooking} min </p>
  </div>
);

export default showRecipe;
