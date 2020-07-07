import React from "react";

import classes from "./Input.css";
import Aux from "../../../hoc/Aux";

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <Aux>
          <label className={classes.Label}>{props.label}</label>
          <input
            className={[classes.InputElement, classes[props.class]].join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </Aux>
      );
      break;
    case "textarea":
      inputElement = (
        <Aux>
          <label className={classes.Label}>{props.label}</label>
          <textarea
            className={[classes.InputElement, classes[props.class]].join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </Aux>
      );
      break;
    case "select":
      inputElement = (
        <Aux>
          <label className={classes.Label}>{props.label}</label>
          <select
            className={[classes.InputElement, classes[props.class]].join(' ')}
            value={props.value}
            onChange={props.changed}
          >
            {props.elementConfig.options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </Aux>
      );
      break;
    default:
      inputElement = (
        <Aux>
          <label className={classes.Label}>{props.label}</label>
          <input
           className={[classes.InputElement, classes[props.class]].join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </Aux>
      );
      break;
  }

  return <div className={classes.Input}>{inputElement}</div>;
};

export default input;
