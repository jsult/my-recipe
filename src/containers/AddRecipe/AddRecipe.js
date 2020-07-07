import React, { Component } from "react";

import RecipeForm from "../../components/RecipeForm/RecipeForm";
import Aux from "../../hoc/Aux";
import axios from "../../axios.js";

class AddRecipe extends Component {
  state = {
    recipe: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
        },
        class: "Name",
        label: "Recipe Name",
        value: "",
      },
      category: {
        elementType: "select",
        elementConfig: {
          options: [ "Meat", "Fish", "Vegetarian", "Dessert", "Drink"],
        },
        class: "Category",
        label: "Category",
        value: "",
      },

      preparation: {
        elementType: "input",
        elementConfig: {
          type: "number",
        },
        class: "Time",
        label: "Preparation Time (in minutes)",
        value: "",
      },
      cooking: {
        elementType: "input",
        elementConfig: {
          type: "number",
        },
        class: "Time",
        label: "Cooking Time (in minutes)",
        value: "",
      },

      instructions: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "",
        },
        class: "Instructions",
        label: "Instructions",
        value: "",
      },
      image: {
        elementType: "imput",
        elementConfig: {
          type: "url",
        },
        class: "Image",
        label: "Image (URL)",
        value: "",
      },
    },
    disabled: true,
  };

  formSubmittedHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let element in this.state.recipe) {
        formData[element] = this.state.recipe[element].value;

    }
    axios.post("/recipes.json", formData)
    .then(response => this.props.history.replace('/recipes'));

  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedState = {
      ...this.state.recipe,
    };
    const updatedValue = {
      ...updatedState[inputIdentifier],
    };
    updatedValue.value = event.target.value;
    updatedState[inputIdentifier] = updatedValue;
    this.setState({ recipe: updatedState });
    let check=true;
    for (let item in this.state.recipe) {
        if(updatedState[item].value === "" && item!=="category") {
            check = false;
        }
    }
    if (check) {
        this.setState({disabled: false});
    } else {
        this.setState({disabled: true});
    }
  };

  checkIfDisabled = () => {

  };

  render() {

    return (
      <Aux>
        <RecipeForm
          recipeData={this.state.recipe}
          changed={this.inputChangedHandler}
          formSubmitted={this.formSubmittedHandler}
          fileChanged={this.fileChangedHandler}
          disabled={this.state.disabled}
        />
      </Aux>
    );
  }
}

export default AddRecipe;
