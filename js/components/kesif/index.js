import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
   Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Card,
  CardItem
} from "native-base";
import MapView from 'react-native-maps';
import styles from "./styles";
export default class kesif extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { region } = this.props;
    console.log(region);
    return (
      <Container>
          <Header
          style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
          shadowOpacity: 0,
          shadowColor: 'transparent'
        }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="ios-arrow-back"
                style={{
                color: '#2980b9'
              }}/>
            </Button>
          </Left>

        </Header>

        <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
      </Container>
    );
  }
}
