import React from 'react';
import image from "../../assets/images/background.jpg";
import classes from './WelcomePage.css';

const welcomePage = (props) => (
<div className={classes.WelcomePage}>
    <h2>Welcome to MyRecipe</h2>
    <h3>an app that stores and adds recipes</h3>
    <img src={image}  alt="background"/>
</div>
);

export default welcomePage;