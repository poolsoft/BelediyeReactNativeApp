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
const routes = [
  {
    title:"Belediye Başkanımız",
    screen:"Home",
    icon:"person"
  },
    {
    title:"Kurumsal",
    screen:"BlankPage2",
    icon:"home"
    }
  ];
export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://www.google.com.tr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 120,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >
              
            </TouchableOpacity>
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.screen)}
                >
                  <Icon name={data.icon} /><Text>  {data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
