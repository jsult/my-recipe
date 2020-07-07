import React from "react";
import {NavLink} from 'react-router-dom';

import classes from "./NavigationItem.css";

const navigationItem = (props) => (
  <div className={classes.NavigationItem}>
    <NavLink to={props.link} 
    exact
    activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </div>
);

export default navigationItem;