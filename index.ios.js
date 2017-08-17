import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Splash from './app/views/splash';
import Anasayfa from './app/views/anasayfa';
import Menuler from './app/views/menuler';
import HaberDetay from './app/views/haberDetay';
import Malatya from './app/views/malatya';
import ilceler from './app/views/ilceler';
import Genelbilgi from './app/views/genelbilgi';
import Harita from './app/views/harita';
import HaritaDetay from './app/views/haritaDetay';
import Haritaicerik from './app/views/haritaicerik';
import Hakkimizda from './app/views/hakkimizda';
import Baskan from './app/views/baskan';
import Malatyaicerik from './app/views/malatyaicerik';
import Malatyatarih from './app/views/malatyatarih';






const BelediyeMobileApp = DrawerNavigator(
  {
    Splash: { screen: Splash },
    Anasayfa: { screen: Anasayfa },
    
    HaberDetay: { screen: HaberDetay },
    Malatya: { screen: Malatya },
    ilceler: { screen: ilceler },
    Genelbilgi: { screen: Genelbilgi },
    Harita: { screen: Harita },
    HaritaDetay: { screen: HaritaDetay },
    Malatyaicerik: { screen: Malatyaicerik },
    Haritaicerik: { screen: Haritaicerik },
    Malatyatarih: { screen: Malatyatarih },
    
    
    Hakkimizda: { screen: Hakkimizda },
    Baskan: { screen: Baskan },
    
    
    
    
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
