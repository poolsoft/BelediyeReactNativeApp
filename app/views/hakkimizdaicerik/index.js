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
    ScrollView,
    Linking
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
    ListItem,
    Footer,
    FooterTab
} from "native-base";


import devLoop from '../../services';

const { width } = Dimensions.get('window')

export default class Hakkimizdaicerik extends Component {

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

                        <Button transparent onPress={() => this.props.navigation.navigate("Hakkimizda")}>
                            <Icon active name="ios-arrow-back" />
                        </Button>

                    </Left>

                    <Body>
                        <Title>İletişim</Title>
                    </Body>

                    <Right></Right>
                </Header>
                <Content style={{ backgroundColor: 'white', }}>

                    <List>
                        <ListItem>
                          <Image source={{uri:'http://www.freeiconspng.com/uploads/gmail-icon-5.png'}}
                            style={{ marginLeft: 20, marginTop: 20,width:50,height:50 }}/>

                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20,top:10 }}> necmettincimen01@gmail.com {"\n"} sevdacimen23@gmail.com</Text>
                        </ListItem>
                        <ListItem>

                             <Image source={{uri:'https://maxcdn.icons8.com/Share/icon/Logos//github1600.png'}}
                            style={{ marginLeft: 20, marginTop: 20,width:50,height:50 }}/>

                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20 }}
                                onPress={() => Linking.openURL('https://github.com/NecmettinCimen')}>
                                Necmettin Çimen  {"   &"}</Text>

                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20, }}
                                onPress={() => Linking.openURL('https://github.com/SevdaCimen')}>
                                Sevda Çimen</Text>
                        </ListItem>
                        <ListItem>
                             <Image source={{uri:'http://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Linkedin-icon.png'}}
                            style={{  marginLeft: 20, marginTop: 20,width:50,height:50 }}/>

                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20, }}
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/necmettin-çimen-805275115/')}>
                                Necmettin Çimen {"   &"} </Text>
                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20, }}
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/sevda-çimen-39525abb/')}>
                                Sevda Çimen</Text>
                        </ListItem>
                        <ListItem>

                           <Image source={{uri:'http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png'}}
                            style={{ marginLeft: 20, marginTop: 20,width:50,height:50 }}/>


                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20 }}
                                onPress={() => Linking.openURL('https://www.facebook.com/necmettin.cimen.16')}>
                                Necmettin Çimen {"   &"}</Text>
                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20, }}
                                onPress={() => Linking.openURL('https://www.facebook.com/sevda.cimen.7946?ref=ts&fref=ts')}>
                                Sevda Çimen</Text>

                        </ListItem>
                        <ListItem>
                            <Image source={{uri:'https://maxcdn.icons8.com/Color/PNG/512/Logos/instagram_new-512.png'}}
                            style={{  marginLeft: 20, marginTop: 20,width:50,height:50 }}/>

                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20, }}
                                onPress={() => Linking.openURL('https://www.instagram.com/necmettin.cimen.16/')}>
                                Necmettin Çimen {"   &"}</Text>
                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20, }}
                                onPress={() => Linking.openURL('https://www.instagram.com/sevdacmn/')}>
                                Sevda Çimen</Text>
                        </ListItem>
                        <ListItem>
                            <Image source={{uri:'http://www.neweverbest.com/wp-content/uploads/2015/12/twitter.png'}}
                            style={{ marginLeft: 20, marginTop: 20,width:50,height:50 }}/>

                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft:20 }}
                                onPress={() => Linking.openURL('')}>
                                Necmettin Çimen {"   &"}</Text>
                            <Text style={{ color: 'rgb(255, 142, 0)', fontSize: 16, marginLeft: 20, }}
                                onPress={() => Linking.openURL('https://twitter.com/cimen_sevda')}>
                                Sevda Çimen</Text>

                        </ListItem>


                    </List>







                </Content>



            </Container>

        );
    }
}

