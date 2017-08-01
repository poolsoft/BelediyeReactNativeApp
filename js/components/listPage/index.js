import React, { Component } from "react";
import { ListView, ActivityIndicator, View, AppRegistry, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
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
  ListItem,
  List
} from "native-base";

class ListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://necmettincimen-001-site1.itempurl.com/api/tCategory/' + this.props.navigation.state.params)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          parentMenus: responseJson
        })
      })

  }
  static navigationOptions = {
    header: null
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Blank page</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <List>
            {
              this.state.parentMenus.map((l) => (
                <Text>{l.Identifier}</Text>
              ))
            }
          </List>
        </Content>
      </Container>
    );
  }
}

export default ListPage;
