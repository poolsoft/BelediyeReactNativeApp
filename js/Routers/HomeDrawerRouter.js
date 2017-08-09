import React, { Component } from "react";
import Home from "../components/home/";
import BlankPage2 from "../components/blankPage2";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
import baskan from "../components/baskan";
import malatya from "../components/malatya";
import malatya_ilce from "../components/malatya/malatya_ilce";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 },
      baskan: { screen: baskan },
        malatya: { screen: malatya },
            malatya_ilce: { screen: malatya_ilce },

  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
