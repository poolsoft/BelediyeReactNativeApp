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

export default class ilceler extends Component {

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

                </Header>
                <Content padder>

                    <List >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Ilceler")}>

                            <Card style={{ height: 100 }}>
                                <CardItem style={{justifyContent:'center',alignItems:'center'}}>
                                    <Icon name='document' style={{ color: '#f1c40f' }} />
                                    <Text style={{textAlign:'center'}}>Malatya Genel Bilgi  </Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </CardItem>
                            </Card>


                        </TouchableOpacity>

                        <Card style={{ height: 100 }} >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate()}>
                                <CardItem >
                                    <Icon name='ios-leaf' style={{ color: '#f1c40f' }} />
                                    <Text>Malatya'nın  Tarihi  </Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>

                        <Card style={{ height: 100 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate()}>
                                <CardItem >
                                    <Icon name='ios-image' style={{ color: '#f1c40f' }} />

                                    <Text>Malatya'nın  İlçeleri  </Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>


                        <Card style={{ height: 100 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate()}>
                                <CardItem >
                                    <Icon name='ios-bicycle' style={{ color: '#f1c40f' }} />
                                    <Text>Malatya'da Yaşam  </Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                        <Card style={{ height: 100 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate()}>
                                <CardItem >
                                    <Icon name='ios-heart' style={{ color: '#f1c40f' }} />
                                    <Text>Malatya ve Kayısı </Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>
                    </List>

                </Content>

            </Container>

        );
    }
}

