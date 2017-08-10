import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Splash from './app/views/splash';
import Anasayfa from './app/views/anasayfa';
import Menuler from './app/views/menuler';
import HaberDetay from './app/views/haberDetay';
import BaskanBilgileri from './app/views/baskanBilgileri';
import Malatya from './app/views/malatya';
import ilceler from './app/views/ilceler';
import Genelbilgi from './app/views/genelbilgi';
import Harita from './app/views/harita';
import HaritaDetay from './app/views/haritaDetay';
import Haritaicerik from './app/views/haritaicerik';


const BelediyeMobileApp = DrawerNavigator(
  {
    Splash: { screen: Splash },
    Anasayfa: { screen: Anasayfa },
    HaberDetay: { screen: HaberDetay },
    BaskanBilgileri: { screen: BaskanBilgileri },
    Malatya: { screen: Malatya },
    ilceler: { screen: ilceler },
    Genelbilgi: { screen: Genelbilgi },
    Harita: { screen: Harita },
    HaritaDetay: { screen: HaritaDetay },
    Haritaicerik: { screen: Haritaicerik },
    
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <Menuler {...props} />
  },
  {
    headerMode: 'none'
  }
);

AppRegistry.registerComponent('BelediyeMobileApp', () => BelediyeMobileApp);
