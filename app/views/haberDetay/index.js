import React, { Component } from 'react';
import {
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
    Title
} from "native-base";

import Swiper from 'react-native-swiper';

import devLoop from '../../services';

const { width } = Dimensions.get('window')

export default class HaberDetay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.navigation.state.params,
        };
    }

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

                        <Button transparent onPress={() => this.props.navigation.navigate("Anasayfa")}>
                            <Icon active name="ios-arrow-back" />
                        </Button>

                    </Left>

                    <Body>
                        <Title style={{
                            fontSize: 20,
                            textAlign: 'center',
                            margin: 10,
                        }}>Haber Detay</Title>
                    </Body>

                </Header>
                <ScrollView>

                    <Image resizeMode='stretch' style={{
                        width: width,
                        height: 300,
                        justifyContent: "center",
                        alignItems: "center"
                    }} source={{ uri: 'http://www.malatya.bel.tr/' + this.state.dataSource.SpotImage }} />

                    <Text style={{
                        fontSize: 24,
                        margin: 10,
                        fontWeight: '900'
                    }}>{this.state.dataSource.Header}</Text>

                    <Text style={{
                        fontSize: 18,
                        margin: 10,
                    }}>{this.state.dataSource.Description}</Text>

                </ScrollView>

            </Container>

        );
    }
}

