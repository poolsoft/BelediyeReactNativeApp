import React, { Component } from "react";
import Home from "../components/home/";
import BlankPage2 from "../components/blankPage2";
import ListPage from "../components/listPage";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 },
    ListPage: { screen: ListPage }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
