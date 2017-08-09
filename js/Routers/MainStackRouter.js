import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import SplashScreen from "../components/splashScreen";
import Page1 from "../components/home";
import NewsDetail from "../components/newsDetail";
import kesif from "../components/kesif";
import baskan from "../components/baskan";
import malatya from "../components/malatya";
import malatya_ilce from "../components/malatya/malatya_ilce";
import malatya_genelbilgi from "../components/malatya/malatya_genelbilgi";
import malatya_kayısı from "../components/malatya/malatya_kayısı";
import malatya_tarih from "../components/malatya/malatya_tarih";
import malatya_yasam from "../components/malatya/malatya_yasam";

import HomeDrawerRouter from "./HomeDrawerRouter";

HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});

export default (StackNav = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Page1: { screen: Page1 },
  NewsDetail: { screen: NewsDetail },
  kesif: { screen: kesif },
  baskan: { screen: baskan },
  malatya: { screen: malatya },
  malatya_genelbilgi: { screen: malatya_genelbilgi },
  malatya_kayısı: { screen: malatya_kayısı },
  malatya_tarih: { screen: malatya_tarih },
  malatya_yasam: { screen: malatya_yasam },
  malatya_ilce: { screen: malatya_ilce },


}));
