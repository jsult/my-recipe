import React, { Component } from "react";
import { Route } from "react-router-dom";
import {withRouter} from 'react-router-dom';

import Layout from "./containers/Layout/Layout";
import ShowRecipes from "./components/ShowRecipes/ShowRecipes";
import OpenRecipe from './components/OpenRecipe/OpenRecipe';
import AddRecipe from "./containers/AddRecipe/AddRecipe";
import WelcomePage from './components/WelcomePage/WelcomePage';
import axios from "./axios";


class App extends Component {
  state = {
    recipes: [
      {
        name: "",
        category: "",
        preparation: 0,
        cooking: 0,
        instructions: "",
        image: "",
      },
    ],
    chosenRecipe: "",
    active: "All",
  };

  componentDidMount() {
    axios
      .get("https://my-recipe-139a1.firebaseio.com/recipes.json")
      .then((response) => {
        if (response.data !== null) {
          this.setState({
            recipes: Object.keys(response.data).map((i) => response.data[i]),
          });
        }
      });
  }

  openOneRecipe = (name) => {
    this.setState({chosenRecipe: name});
    this.props.history.replace('/show_recipe');
  };

  buttonClickedHandler = (category) => {
    this.setState({active: category});
  }

  render() {
    let recipe = "";

    for (let item in this.state.recipes) {
      if (this.state.recipes[item].name === this.state.chosenRecipe) {
        recipe = this.state.recipes[item];
      }
    };
   
    let showRecipes = this.state.recipes[0].name !== "";
      
  
    return (
      <div>
        <Layout>
        <Route path="/" exact component={WelcomePage} />
        <Route
        path="/recipes"
        render={() => (
          <ShowRecipes
            recipesList={this.state.recipes}
            show = {showRecipes}
            clicked={this.openOneRecipe}
            active={this.state.active}
            buttonClicked={this.buttonClickedHandler}
          />
        )}
      />
      <Route  path='/show_recipe'
      render={() => (
          <OpenRecipe
          recipe={recipe}
       
          />
        )} />
          <Route path="/add" component={AddRecipe} />
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
