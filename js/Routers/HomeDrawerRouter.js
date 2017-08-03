import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "../components/home";

export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home }
  }
));
