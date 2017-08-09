import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Content, List, ListItem, Text, Left, Button, Body, Title, Icon, Card, CardItem, Right } from 'native-base';
import { TouchableOpacity } from 'react-native';
class malatya extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>

          <Body>
            <Title>Malatya</Title>
          </Body>


        </Header>

        <Content padder  >

          <List >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("malatya_ilce")}>

              <Card  style={{ height:100}}>
                <CardItem >
                  <Icon name='document' style={{ color: '#f1c40f' }} />
                  <Text>Malatya Genel Bilgi  </Text>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>
              </Card>


            </TouchableOpacity>

            <Card style={{ height:100}} >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate()}>
                <CardItem >
                  <Icon name='ios-leaf' style={{ color: '#f1c40f' }} />
                  <Text>Malatya'nın  Tarihi  </Text>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>
              </TouchableOpacity>
            </Card>

            <Card style={{ height:100}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate()}>
                <CardItem >
                  <Icon name='ios-image' style={{ color: '#f1c40f' }} />

                  <Text>Malatya'nın  İlçeleri  </Text>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>
              </TouchableOpacity>
            </Card>


            <Card style={{ height:100}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate()}>
                <CardItem >
                  <Icon name='ios-bicycle' style={{ color: '#f1c40f' }} />
                  <Text>Malatya'da Yaşam  </Text>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>
              </TouchableOpacity>
            </Card>
            <Card style={{ height:100}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate()}>
                <CardItem >
                  <Icon name='ios-heart' style={{ color: '#f1c40f' }} />
                  <Text>Malatya ve Kayısı </Text>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>
              </TouchableOpacity>
            </Card>
          </List>
        </Content>
      </Container>
    );
  }
}

export default malatya;
