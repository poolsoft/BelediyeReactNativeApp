import React, { Component } from "react";
import { View, Image, ActivityIndicator, StatusBar } from 'react-native';

import apis from '../apis'

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {

    let query = 'SELECT `Header`,`Description`,`SpotImage` FROM `tcontentlanguage` ORDER BY  `tcontentlanguage`.`ContentID` DESC LIMIT 0 , 30';
    
    var data = apis.getAllByQuery(query).then((res) => {
      this.props.navigation.navigate("Page1", res)
    });

  }

  render() {
    return (

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
      }}>
        <StatusBar
          backgroundColor="black"
        />
        <Image source={{ uri: 'http://tedarik.malatya.bel.tr/Assets/Images/webtvlogo.png' }} style={{ width: 400, height: 120, alignItems: 'center', resizeMode: 'contain', justifyContent: 'center' }} />


        <ActivityIndicator size="large" color="#2980b9" style={{
          marginTop: 30
        }} />

      </View>

    );
  }
}

export default SplashScreen;
