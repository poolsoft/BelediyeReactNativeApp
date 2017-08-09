import React, { Component } from "react";
import { View, ActivityIndicator, ListView, Image } from 'react-native'
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
import apis from '../apis'

class baskan extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    openDrawer: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {

    let query = 'SELECT * FROM `tcontentlanguage` WHERE `ContentID` =22 ';

    return apis.getAllByQuery(query).then((res) => {
      this.setState({
          isLoading: false,
          dataSource: res[0]
        });
    });

  }
  render() {
    if (this.state.isLoading) {
      return (
     <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: '#2980b9' }}>Bilgiler Yükleniyor Lütfen Bekleyiniz </Text>
          <ActivityIndicator size="large" color="#f1c40f" style={{
            marginTop: 30
          }} />
        </View>
      );
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>

          <Body>
            <Title>Başkan</Title>
          </Body>

        </Header>

        <Content padder>
          <Image
            source={{
              uri: 'http://www.malatya.bel.tr/Files/ContentImage/ahmet_cakir.png'
            }}
            style={{
              height: 200,
              width: 400,
              top: 0,
              resizeMode: 'stretch'
            }} />
          <Card
            style={{
              backgroundColor: '#c0392b',
              borderLeftWidth: 5
            }}>
            <CardItem>
              <Text>
                {this.state.dataSource.Header}
              </Text>
            </CardItem>
          </Card>
          <Card
            style={{
              backgroundColor: '#c0392b',
              borderLeftWidth: 5
            }}>
            <CardItem>
         
<Text> {this.state.dataSource.Description}</Text>
                
          
              
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default baskan;