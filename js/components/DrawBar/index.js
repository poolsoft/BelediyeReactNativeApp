import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";

const routes = [{
  name:'    Anasayfa',
  navigateUrl:'Home',
  icon:'home'
},
{
   name:'   Belediye Başkanımız Hakkında',
  navigateUrl:'baskan',
  icon:'person'
},
{
   name:'   Malatya',
  navigateUrl:'Malatya',
  icon:'map'
},
{
   name:'   Malatyayı Keşfedin',
  navigateUrl:'kesif',
  icon:'map'
}];

export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Content>
         
            <TouchableOpacity
              style={{
                height: 120,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >
              <Image
                square
                style={{ resizeMode:'stretch'}}
                source={require('../../../images/icon.png')  }
              />
            </TouchableOpacity>
         
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.navigateUrl)}
                >
            <Icon name={data.icon} style={{ color: '#f39c12' }} />
                  <Text>{ data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
