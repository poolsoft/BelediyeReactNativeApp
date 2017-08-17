import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    Image,
    Text,
    ListView,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import {
    Container,
    Header,
    Left,
    Button,
    Icon,
    Content,
    CardItem,
    Card,
    Right,
    Body,
    Title,
    List
} from "native-base";

import AndroidBackButton from "react-native-android-back-button"

import devLoop from '../../services';

const { width } = Dimensions.get('window')

export default class Baskan extends Component {


    render() {



        return (

            <Container style={{
                backgroundColor: 'white'
            }}>
             <View>
     
       <AndroidBackButton
          onPress={ () => this.props.navigation.navigate("Anasayfa") }
         />
      </View>

                <Header style={{
                    backgroundColor: '#FF8E00'
                }}>
                    <StatusBar backgroundColor="#FF8E00" />

                    <Left>

                        <Button transparent onPress={() => this.props.navigation.navigate("Malatya")}>
                            <Icon active name="ios-arrow-back" />
                        </Button>

                    </Left>

                    <Body>
                        <Title style={styles.title}> Başkanımız</Title>
                    </Body>

                    <Right></Right>
                </Header>
                <ScrollView>

                    <Image resizeMode='stretch' style={{
                        width: width,
                        height: 300,
                        justifyContent: "center",
                        alignItems: "center"
                    }} source={{ uri: 'http://www.malatya.bel.tr/Files/ContentImage/baskan_makam.jpg' }} />
                    <Card>
                        <CardItem>
                            <Text style={{
                                fontSize: 24,
                                margin: 10,
                                fontWeight: '900'
                            }}>
                                Başkan Çakır'ın Özgeçmişi

 </Text>
                        </CardItem>
                    </Card>
 <Card>
                        <CardItem>
                    <Text style={{
                        fontSize: 18,
                        margin: 10,
                    }}>
                        1964 yılında Malatya İli Darende İlçesi’nde doğdu. İlkokul, ortaokul ve liseyi Darende’de tamamladıktan sonra Anadolu Üniversitesi İktisat Bölümünden mezun oldu.
                        {"\n"}
                        Gıda, inşaat ve eğitim sektörlerindeki ticari faaliyetlerinin yanısıra, iki yıl Malatya MÜSİAD Yönetim Kurulu Üyeliği ve daha sonra üç yıl MÜSİAD Malatya Şube Başkanlığı görevini yürüttü.
                            {"\n"}
                        2001 yılında AK Parti’nin kuruluşunda Kurucu Yönetim Kurulu Üyesi olarak görev  aldı. Malatya İl Teşkilatı'nda üç yıl Başkan Yardımcılığı yaptı, 2007 yılı Nisan ayında da Sayın Başbakanımız tarafından İl Başkanı  olarak görevlendirildi.

                       {"\n"}
                        29 Mart 2009 yerel seçimleri için bu görevinden istifa ederek Malatya Belediye Başkan Adayı oldu ve Malatya halkının büyük teveccühü ile Malatya Belediye Başkanı seçildi.
                                               {"\n"}
                        Malatya'nın Büyükşehir olmasıyla birlikte, 30 Mart 2014 Mahalli İdareler Genel Seçimleri sonucunda Malatya'nın ilk Büyükşehir Belediye Başkanı seçilmiştir.
                                                                      {"\n"}
                        Evli ve iki çocuk babası olup, orta derecede İngilizce ve Arapça bilmektedir.
                                              {"\n"}
                        {"\n"}
                        (0 422) 377 10 10
                                              {"\n"}
                        baskan@malatya.bel.tr</Text>

                        </CardItem>
                    </Card>
                </ScrollView>

            </Container>

        );
    }
}

