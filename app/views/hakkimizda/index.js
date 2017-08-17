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
                <Content style={{backgroundColor:'#bdc3c7'}}>
                    <Card style={{ flex: 0,top:0 ,height:280}}>
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
                                 Eskişehir Osmangazi Üniversitesi Bilgisayar Mühendisliği son sınıf ögrencisi.                                 
                                {"\n"} Aşağıdaki linklerden bana ulaşabilirsiniz:
                </Text>


                                <Image source={{uri:'https://www.lehigh.edu/google/gmail.png'}}
                                style={{ width: 30, height: 20, marginTop: 10, marginLeft: 15, }} />
                                <Text style={{ marginTop: -20, marginLeft: 40 }}>   sevdacimen23@gmail.com</Text>
                                <Icon name="logo-linkedin" style={{ width: 40, height: 30, marginTop: 10, marginLeft: 20 ,color:'#0077B5'}} />
                                  <Text  style={{ marginTop: -25, marginLeft: 50 }}
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/sevda-çimen-39525abb/')}>
                                Sevda Çimen</Text>
                                <Icon name="logo-github" style={{ width: 40, height: 30, marginTop: 10, marginLeft: 20 }} />
                                   <Text   style={{ marginTop: -25, marginLeft: 50 }}
                                onPress={() => Linking.openURL('https://github.com/SevdaCimen')}>
                                Sevda Çimen</Text>
                                
                                

                            </Body>
                        </CardItem>
                    </Card>

                    <Card style={{ flex: 0,height:270,top:10 }}>
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
                                                             
                                <Text>  Malatya İnönü Üniversitesi Bilgisayar Mühendisliği  
         {"\n"} Aşağıdaki linklerden bana ulaşabilirsiniz:
         
</Text>
 <Image source={{uri:'https://www.lehigh.edu/google/gmail.png'}}
                                style={{ width: 30, height: 20, marginTop: 10, marginLeft: 15, }} />
                                <Text style={{ marginTop: -20, marginLeft: 40 }}>  necmettincimen01@gmail.com</Text>
                                <Icon name="logo-linkedin" style={{ width: 40, height: 30, marginTop: 10, marginLeft: 20 ,color:'#0077B5'}} />
                                
                            <Text  style={{ marginTop: -25, marginLeft: 50 }}
                                onPress={() => Linking.openURL('https://www.linkedin.com/in/necmettin-çimen-805275115/')}>
                                Necmettin Çimen  </Text>
                                <Icon name="logo-github" style={{ width: 40, height: 30, marginTop: 10, marginLeft: 20 }} />
                                   <Text   style={{ marginTop: -25, marginLeft: 50 }}
                                onPress={() => Linking.openURL('https://github.com/NecmettinCimen')}>
                                Necmettin Çimen</Text>
                            </Body>
                        </CardItem>
                    </Card>








                </Content>
                <Footer style={{height:30}}>
                    <FooterTab style={{ backgroundColor: '#FF8E00' ,}}>


                        <Button
                           >
                            <Text style={{ color: 'white' }}>@devloop</Text>
                        </Button>

                    </FooterTab>
                    
                </Footer>


            </Container>

        );
    }
}

