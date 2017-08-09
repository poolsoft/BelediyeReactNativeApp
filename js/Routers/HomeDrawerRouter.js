import React, { Component } from "react";
import Home from "../components/home/";
import BlankPage2 from "../components/blankPage2";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
import baskan from "../components/baskan";
import malatya from "../components/malatya";
import malatya_ilce from "../components/malatya/malatya_ilce";
import malatya_genelbilgi from "../components/malatya/malatya_genelbilgi";
import malatya_tarih from "../components/malatya/malatya_tarih";
import malatya_yasam from "../components/malatya/malatya_yasam";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 },
    baskan: { screen: baskan },
    malatya: { screen: malatya },
    malatya_genelbilgi: { screen: malatya_genelbilgi },
    malatya_tarih: { screen: malatya_tarih },
    malatya_yasam: { screen: malatya_yasam },
    malatya_ilce: { screen: malatya_ilce },


  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
