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
                    height: 300,
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
                <View>
                    <CardItem style={{ backgroundColor: '#FF8E00' }}>
                    </CardItem>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', top: 0 }}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Camiler', query: 'mosque' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Image source={{ uri: 'https://images.vexels.com/media/users/3/137734/isolated/preview/d02e892fea06ea885d25bad9d0d207c4-mosque-islam-flat-by-vexels.png' }}
                            style={{ marginLeft: 20, marginTop: 15, width: 50, height: 50 }} />
                        <Text style={{ color: '#FF8E00' }}>     Camiler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Magazalar', query: 'store' })}
                        style={{ width: width / 2, height: 100, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', }}>
                        <Image source={{ uri: 'https://cdn0.iconfinder.com/data/icons/e-commerce-and-shopping-2/512/shop_store_market_shopping_cafe_retail_sale_trading_trade_products_commerce_marketplace_bar_bistro_grocery_building_service_business_flat_design_icon-512.png' }}
                            style={{ marginLeft: 20, marginTop: 15, width: 50, height: 50 }} />
                        <Text style={{ color: '#FF8E00' }}>   Magazalar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Restaurantlar', query: 'food' })}
                        style={{
                            width: width / 2, height: 100,  alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/travel-colored-icons-vol-1/48/037-512.png' }}
                            style={{ marginLeft: 20, marginTop: 0, width: 50, height: 50 }} />
                        <Text style={{ color: "#FF8E00", }}>    Restaurantlar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'ATM', query: 'atm' })}
                        style={{
                            width: width / 2, height: 100,  alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Image source={{ uri: 'https://www.shareicon.net/download/2016/07/06/105730_money_512x512.png' }}
                            style={{ marginLeft: 20, marginTop: 0, width: 50, height: 50 }} />
                        <Text style={{ color: '#FF8E00' }}>   ATM</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Hastaneler', query: 'hospital' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7juLL0XPSSGK2aAQ_v7_pIU8sGwF9rCnSmaIzuvs-ThqUBr-' }}
                            style={{ marginLeft: 20, marginTop: 0, width: 50, height: 50 }} />
                        <Text style={{ color: '#FF8E00' }}>    Hastaneler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("HaritaDetay", { title: 'Polis Merkezi', query: 'police' })}
                        style={{
                            width: width / 2, height: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/law-and-justice-icons-1/512/Law_26-19-512.png' }}
                            style={{ marginLeft: 20, marginTop: 0, width: 50, height: 50 }} />

                        <Text style={{ color: '#FF8E00' }}>Polis Merkezi</Text>
                    </TouchableOpacity>
                </View>


            </Container >
        );
    }
}

