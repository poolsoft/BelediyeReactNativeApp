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
    StyleSheet
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

import MapView from 'react-native-maps';

import devLoop from '../../services';

const { width } = Dimensions.get('window');

export default class Harita extends Component {
    render() {
        const { region } = this.props;
        return (
            <Container>
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
                        }}>Keşfet</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <View style={{
                    width: width,
                    height: 350,
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <MapView
                        style={{
                            ...StyleSheet.absoluteFillObject,
                        }}
                        region={{
                            latitude: 38.348615,
                            longitude: 38.294145,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: 38.348615,
                                longitude: 38.294145,
                            }}
                            title={"Malatya Büyükşehir Belediyesi"}
                        />
                    </MapView>

                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Camiler', query: 'mosque' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Icon style={{ color: '#FF8E00' }} name='ios-bicycle' />
                        <Text style={{ color: '#FF8E00' }}>Camiler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Magazalar', query: 'store' })}
                        style={{ width: width / 2, height: 100, alignItems: 'center', justifyContent: 'center', }}>
                        <Icon style={{ color: '#FF8E00' }} name='ios-star' />
                        <Text style={{ color: '#FF8E00' }}>Magazalar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Restaurantlar', query: 'food' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Icon style={{ color: '#FF8E00' }} name='restaurant' />
                        <Text style={{ color: "#FF8E00" }}>Restaurantlar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'ATM', query: 'atm' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Icon style={{ color: '#FF8E00' }} name='ios-search' />
                        <Text style={{ color: '#FF8E00' }}>ATM</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Hastaneler', query: 'hospital' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Icon style={{ color: '#FF8E00' }} name='ios-bicycle' />
                        <Text style={{ color: '#FF8E00' }}>Hastaneler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Polis Merkezi', query: 'police' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Icon style={{ color: '#FF8E00' }} name='ios-search' />
                        <Text style={{ color: '#FF8E00' }}>Polis Merkezi</Text>
                    </TouchableOpacity>
                </View>


            </Container >
        );
    }
}

