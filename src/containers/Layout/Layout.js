import React, { Component } from "react";

import Toolbar from '../../components/UI/Toolbar/Toolbar';
import classes from "./Layout.css";


class Layout extends Component {


  render() {
    return (
      <div className={classes.Layout}>
          <Toolbar/>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
