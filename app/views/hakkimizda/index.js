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
    List,
    Footer,
    FooterTab,
    Thumbnail
} from "native-base";


import devLoop from '../../services';
import Hakkimizdaicerik from '../hakkimizdaicerik'
const { width } = Dimensions.get('window')

export default class Hakkimizda extends Component {

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

                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon active name="ios-arrow-back" />
                        </Button>

                    </Left>

                    <Body>
                        <Title> Biz Kimiz</Title>
                    </Body>

                    <Right></Right>
                </Header>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA3DAAAAJDNkNDQ1ZjEwLWRjYWEtNGRlOC1hOTJjLWM0MGMzZGI5NzA3ZA.jpg' }} />
                                <Body>
                                    <Text style={{ fontWeight: 'bold' }}>Sevda Çimen</Text>
                                    <Text note>Eskişehir Osmangazi Üniversitesi{"\n"}Vilnius Gediminas Technical University</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    Osmangazi üniversitesi bilgisayar mühendisliği son sınıf  ögrencisiyim.Bölümüm
                                    içerisinde hocalarımın destegi ve yönlendirmesi ile birçok projede görev alıp
                                kendimi geliştirme fırsatı buldum.Dahil  olduğum projeler:
                                {"\n"}
                             


                                    <Text style={{ fontWeight: 'bold' }}>    Megaron App  {"\n"} </Text>
                                    Mobil Uygulamalarda Güvenlik Açıklarının Taranmanması
                                    {"\n"}

                                    <Text style={{ fontWeight: 'bold' }}>    Stok Güncelleme {"\n"} </Text>

                                    Vilnius Gediminias Technical üniversitesinde almış oldugum Object Oriented
                                    Techniques dersi kapsamında stok güncelemesi yapan bir uygulama geliştirdik.
                                    {"\n"}

                                    <Text style={{ fontWeight: 'bold',  }}>     TransXChange{"\n"} </Text>


                                    Biçimsel diller ve otomata dersi kapsamında toplu taşıma araçlarının haberleşmesini
                                    sağlayan XML tabanlı C# uygulaması geliştirdik. {"\n"}

                                  <Text style={{ fontWeight: 'bold' }}>   Soket API Programlama{"\n"} </Text>


                                    Soket Apı programlama ile araba simülatörü yapıldı.Etkin kullanılan dil C++
                                            {"\n"}

                                    <Text style={{ fontWeight: 'bold' }}>      Web dizayn{"\n"} </Text>


                                    Beliri bir proje olmamakla birlikte daha önce yer aldığım projeler içerisinde web
                                    dizaynın yapılmasında görev aldım.Ayrıca boş zamanlarımda ek çalışma olması adına
                                    web dizayn ile uğraşmaktayım.

                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/730113688804397057/RbzKvbaC.jpg' }} />
                                <Body>
                                    <Text style={{ fontWeight: 'bold' }}>Necmettin Çimen</Text>
                                    <Text note>İnönü Üniversitesi</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
<Text> hajhajbadb</Text>
                            </Body>
                        </CardItem>
                    </Card>








                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#FF8E00' }}>
                       
                       
                        <Button 
                        onPress={() => this.props.navigation.navigate("Hakkimizdaicerik")} >
                            <Text style={{color:'white'}}>İletişim</Text>
                        </Button>

                    </FooterTab>
                </Footer>


            </Container>

        );
    }
}

