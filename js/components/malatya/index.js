import React, { Component } from "react";
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
  Card,
  CardItem
} from "native-base";
import { WebView } from 'react-native';
import styles from "./styles";
class malatya extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { props: { name, index, list } } = this;
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

        <Content style={styles.main}>

          <Card>

            <CardItem style={{ backgroundColor: 'red', height: 100, width: 100 }}>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ backgroundColor: 'blue', height: 100, width: 100 }}>
            </CardItem>
          </Card >
          <Card>
            <CardItem style={{ backgroundColor: 'yellow', height: 100, width: 100 }}>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ backgroundColor: 'green', height: 100, width: 100 }}>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ backgroundColor: 'green', height: 100, width: 100 }}>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default malatya;
