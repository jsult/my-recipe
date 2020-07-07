import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';


const navigationItems = () => (
   <div className={classes.NavigationItems}>
       <NavigationItem link="/" ><span className={classes.Logo}>My Recipe</span></NavigationItem>
       <NavigationItem link="/recipes" >Show Recipes</NavigationItem>
       <NavigationItem link="/add">Add Recipe</NavigationItem>
   </div>
);

export default navigationItems;