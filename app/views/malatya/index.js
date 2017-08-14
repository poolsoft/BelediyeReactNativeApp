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

import Swiper from 'react-native-swiper';

import devLoop from '../../services';

const { width } = Dimensions.get('window')

class MalatyaItem extends Component {

    render() {
        return (
            <Card>
                <CardItem style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={this.props.icon} style={{ color: '#FF8E00' }} />
                    <Text style={{ textAlign: 'center', fontSize: 24 }}>{this.props.name}</Text>

                </CardItem>
            </Card>

        );
    }
}

export default class Malatya extends Component {

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
                            <Icon active name="menu" />
                        </Button>

                    </Left>

                    <Body>
                        <Title style={{
                            fontSize: 20,
                            textAlign: 'center',
                            margin: 10,
                        }}>Malatyam</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content >
<Card>
                    <Image source={{uri:'https://i.hizliresim.com/1nLZ71.jpg'}}
style={{resizeMode:'stretch',height:250,width:400}}/>
</Card>
                    <List>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Genelbilgi", {title:'Malatya Genel Bilgi', query: 'SELECT * FROM `tcontentlanguage` where `ContentID` = 27' })}>
                            <MalatyaItem name='Malatya Genel Bilgi' icon='document' />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Genelbilgi", {title:"Malatya'nın  Tarihi", query: 'SELECT * FROM `tcontentlanguage` where `ContentID` = 28' })}>
                            <MalatyaItem name="Malatya'nın  Tarihi" icon='ios-leaf' />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("ilceler")}>
                            <MalatyaItem name="Malatya'nın  İlçeleri" icon='ios-image' />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Genelbilgi", {title:"Malatya'da Yaşam", query: 'SELECT * FROM `tcontentlanguage` where `ContentID` = 43' })}>
                            <MalatyaItem name="Malatya'da Yaşam" icon='ios-bicycle' />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Genelbilgi", {title:'Malatya ve Kayısı', query: 'SELECT * FROM `tcontentlanguage` where `ContentID` = 44' })}>
                            <MalatyaItem name="Malatya ve Kayısı" icon='ios-heart' />
                        </TouchableOpacity>

                    </List>
                    

                </Content>

            </Container>

        );
    }
}

