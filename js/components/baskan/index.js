import React, {Component} from "react";
import {View, ActivityIndicator, ListView, Image} from 'react-native'
import {connect} from "react-redux";
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
    return fetch('http://devloop.necmettincimen.com/index.php/api/query/select%20*%20from%20tconte' +
        'ntlanguage%20where%20contentid%20=%2022').then((response) => response.json()).then((responseJson) => {
      this
        .setState({
          isLoading: false,
          dataSource: responseJson[0]
        }, function () {
          // do something with new state
        });
    }).catch((error) => {
      console.error(error);
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{
          flex: 1,
          paddingTop: 20
        }}>
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                 <Icon name="ios-menu"/>
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
          }}/>
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
              <Text>
                1964 yılında Malatya İli Darende İlçesi’nde doğdu. İlkokul, ortaokul ve liseyi
                Darende’de tamamladıktan sonra Anadolu Üniversitesi İktisat Bölümünden mezun
                oldu. Gıda, inşaat ve eğitim sektörlerindeki ticari faaliyetlerinin yanısıra,
                iki yıl Malatya MÜSİAD Yönetim Kurulu Üyeliği ve daha sonra üç yıl MÜSİAD
                Malatya Şube Başkanlığı görevini yürüttü. 2001 yılında AK Parti’nin kuruluşunda
                Kurucu Yönetim Kurulu Üyesi olarak görev aldı. Malatya İl Teşkilatı'nda üç yıl
                Başkan Yardımcılığı yaptı, 2007 yılı Nisan ayında da Sayın Başbakanımız
                tarafından İl Başkanı olarak görevlendirildi. 29 Mart 2009 yerel seçimleri için
                bu görevinden istifa ederek Malatya Belediye Başkan Adayı oldu ve Malatya
                halkının büyük teveccühü ile Malatya Belediye Başkanı seçildi. Malatya'nın
                Büyükşehir olmasıyla birlikte, 30 Mart 2014 Mahalli İdareler Genel Seçimleri
                sonucunda Malatya'nın ilk Büyükşehir Belediye Başkanı seçilmiştir. Evli ve iki
                çocuk babası olup, orta derecede İngilizce ve Arapça bilmektedir.
              </Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}

export default baskan;
""