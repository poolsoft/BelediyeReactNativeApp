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


import devLoop from '../../services';

const { width } = Dimensions.get('window')

export default class Malatyaicerik extends Component {


    render() {



        return (

            <Container style={{
                backgroundColor: 'white'
            }}>

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
                        <Title> Malatya </Title>
                    </Body>

                    <Right></Right>
                </Header>
                <ScrollView>

                    <Image resizeMode='stretch' style={{
                        width: width,
                        height: 300,
                        justifyContent: "center",
                        alignItems: "center"
                    }} source={{ uri: 'http://www.malatya.bel.tr/Files/malatya(eski)/malatya_genel_09_09_2013_1.jpg' }} />

          

                    <Text style={{
                        fontSize: 18,
                        margin: 10,
                    }}>
                       İlimizin 2014 yılı adrese dayalı nüfus kayıt sistemine göre nüfusu 769.544 kişi’dir, İlin nüfus yoğunluğu 65 kişi/km2 ‘dir.  {"\n"}
                       Ekonomik ve sosyal yönden çok geniş bir etki alanı bulunması, nüfus üzerinde etkili olmaktadır. 1927 yılında 305.785 kişi olan ilimizin nüfusu; Malatya Ovası’nın verimli ve çevre illere göre sanayisinin gelişmiş olması nedenleriyle, gerek kendi köylerinden, gerekse Adıyaman, Elazığ gibi illerden sürekli göç alması sonucu merkez nüfusu 1990 yılında 702.055, 2000 yılında 853.658 kişiye ulaşmıştır. Malatya, Doğu Anadolu Bölgesi’nin yukarı Fırat havzasında ve Adıyaman, Malatya, Elazığ, Bingöl, Muş, Van çöküntü alanının Güneybatı ucunda yer almaktadır. Çevresini doğuda Elazığ ve Diyarbakır, güneyde Adıyaman, batıda Kahramanmaraş, kuzeyde Sivas ve Erzincan illeri çevrelemektedir. 
                        {"\n"}İl topraklarının yüz ölçümü 12.313 km2 olup 35 34` ve 39 03` kuzey enlemleri ile 38 45` ve 39 08` doğu boylamları arasında kalmaktadır. Malatya, Sultansuyu ve Sürgü Çayı Vadileri ile Akdeniz’e, Tohma Vadisi ile İç Anadolu’ya, Fırat Vadisi ile Doğu Anadolu’ya açılarak bu bölgeler arasında bir geçiş alanı oluşturur. 
                       {"\n"}İlimiz 12/11/2012 kabul tarihli ve 6360 sayılı Kanunla Büyükşehir olmuştur. İlimiz 13 ilçeden oluşmaktadır.</Text>

                </ScrollView>

            </Container>

        );
    }
}

