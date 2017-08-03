import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Dimensions, ScrollView } from 'react-native';
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

const { width } = Dimensions.get('window')

class NewsDetail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { params } = this.props.navigation.state;

    return (

      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Haber Detay</Title>
          </Body>

        </Header>

        <Content padder>
          <ScrollView>
            <Image
              source={{
                uri: "www.malatya.bel.tr/" + params.SpotImage
              }}
              style={{
                height: 150,
                resizeMode: "contain",
                alignItems: "center"
              }}
            />

            <Card>
              <CardItem>
                <Body>
                  <Text style={{ fontSize: 24, textAlign: 'center' }}>
                    {params.Header}
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Body>
                  <Text>
                    {params.Description}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default NewsDetail;
