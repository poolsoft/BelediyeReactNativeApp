import React, { Component } from "react";
import { View, Image, ActivityIndicator, StatusBar } from 'react-native';


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
    return fetch('http://devloop.necmettincimen.com/index.php/api/query/SELECT%20%60Header%60%20,%20%60Description%60%20,%20%60SpotImage%60%20,%20%60PostUrl%60%20FROM%20%60tcontentlanguage%60%20ORDER%20BY%20%60tcontentlanguage%60.%60ContentID%60%20DESC%20LIMIT%200%20,%2030')
      .then((response) => response.json())
      .then((responseJson) => {

        this.props.navigation.navigate("Page1", responseJson)

      })
      .catch((error) => {
        console.error(error);
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
        <Image source={{ uri: 'http://tedarik.malatya.bel.tr/Assets/Images/webtvlogo.png' }} style={{ width: 450, height: 120, alignItems: 'center', resizeMode: 'contain', justifyContent: 'center' }} />


        <ActivityIndicator size="large" color="#2980b9" style={{
          marginTop: 30
        }} />

      </View>

    );
  }
}

export default SplashScreen;
