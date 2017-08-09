import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { ActivityIndicator, ListView, View, Image } from 'react-native';
import styles from "./styles";
import HTMLView from 'react-native-htmlview';
import { Dimensions, ScrollView } from 'react-native';
import apis from '../../apis'

const { width } = Dimensions.get('window')

class malatya_ilce extends Component {
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
    let query = "SELECT  `Header` ,  `Description` ,  `SpotImage` FROM  `tcontentlanguage` WHERE  `ContentID` >28 AND  `ContentID` <43 ORDER BY  `tcontentlanguage`.`Header` ASC LIMIT 0 , 30"
    
       return apis.getAllByQuery(query).then((res) => {         
      this.setState({
          isLoading: false,
          dataSource: res
        });
    });

 
   
  }
  render() {
    const { props: { name, index, list } } = this;
    const htmlContent = `<p><a href="http://www.malatya.bel.tr/kategori/30/1/malatyanin-ilceleri.aspx"> Daha fazlasını okuyun</a></p>`;

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
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title >İlçelerimiz</Title>
          </Body>


        </Header>

        <Content style={styles.main}>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>

              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: 'http://www.gencgonulluler.gov.tr/dosyalar/kurum/e1170d59-7e3b-11e6-9314-005056af6cb8/logo//logo.png' }}
                      style={{ resizeMode: 'stretch' }} />
                    <Body>
                      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{rowData.Header} </Text>

                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={{ top: -10, }}>
                  <Body>
                    <Image source={require('../../../../images/sire_pazari.jpg')} style={{ height: 150, width: 350, flex: 1, left: 15, justifyContent: 'center', alignContent: 'center', }} />

                    <Text >{rowData.Description}

                    </Text>

                  </Body>
                </CardItem>
                <CardItem style={{ top: -20, height: 50 }}>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>
                      <Icon name="paper" />
                      <HTMLView value={htmlContent} />


                    </Button>
                  </Left>
                </CardItem>
              </Card>
            }
          />


        </Content>
      </Container>
    );
  }
}

export default malatya_ilce;
