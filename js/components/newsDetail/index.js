import React, {Component} from "react";
import {connect} from "react-redux";
import {Image, Dimensions, ScrollView} from 'react-native';
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
import HTMLView from 'react-native-htmlview';

const {width} = Dimensions.get('window')

class NewsDetail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const htmlContent = `<p><a href="http://www.malatya.bel.tr/kategori/18/1/haberler.aspx">&hearts;&hearts; Okumaya Devam Edin !!</a></p>`;
    const {params} = this.props.navigation.state;

    return (

      <Container >
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

        <Content padder >
          <Image
            style={{
            height: 200,
            width: 400,
            top: 0,
            resizeMode: 'stretch'
          }}
            source={{
            uri: 'http://malatya.bel.tr/' + params.SpotImage
          }}/>
          <ScrollView>

            <Card
              style={{
              backgroundColor: '#c0392b',
              borderLeftWidth: 5
            }}>
              <CardItem style={{
                backgroundColor: 'white'
              }}>
                <Body >
                  <Text
                    style={{
                    fontSize: 24,
                    textAlign: 'center'
                  }}>
                    {params.Header}
                    {"\n"}
                  </Text>
                
             
                </Body>
              </CardItem>
            </Card>
            <Card
              style={{
              backgroundColor: '#c0392b',
              borderLeftWidth: 5
            }}>
              <CardItem style={{
                backgroundColor: 'white'
              }}>
                <Body >
              
               
                  <Text>
                    {params.Description}
                    {"\n"}
                    {"\n"}
                  </Text>
                  <HTMLView value={htmlContent}/>
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