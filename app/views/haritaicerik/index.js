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

export default class Haritaicerik extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locationData: this.props.navigation.state.params
        }

        console.log(this.props.navigation.state.params);
        debugger;

    }

    render() {
        return (
            <Container>
                <Header style={{
                    backgroundColor: '#FF8E00'
                }}>
                    <StatusBar backgroundColor="#FF8E00" />

                    <Left>

                        <Button transparent onPress={() => this.props.navigation.navigate("HaritaDetay")}>
                            <Icon active name="ios-arrow-back" />
                        </Button>

                    </Left>

                    <Body>
                        <Title>{this.state.locationData.name}</Title>
                    </Body>
                    <Right></Right>

                </Header>

                <ScrollView>


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
                                latitude: this.state.locationData.geometry.location.lat,
                                longitude: this.state.locationData.geometry.location.lng,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}>
                            <MapView.Marker
                                coordinate={{
                                    latitude: this.state.locationData.geometry.location.lat,
                                    longitude: this.state.locationData.geometry.location.lng,
                                }}
                            />
                        </MapView>

                    </View>

                    <Card>
                        <CardItem header>
                            <Icon name="map" />
                            <Text style={{fontWeight:'bold'}}>Adı</Text>
                        </CardItem>
                        <CardItem>
                            <Body>

                                <Text>
                                    {this.state.locationData.name}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Icon name="map" />
                            <Text style={{fontWeight:'bold'}}>Adres</Text>
                        </CardItem>
                        <CardItem>
                            <Body>

                                <Text>
                                    {this.state.locationData.formatted_address}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>


                    <Card>
                        <CardItem header>
                        <Icon name="map" />
                            <Text style={{fontWeight:'bold'}}>Detay</Text>
                        </CardItem>
                        <CardItem>
                            <Body>

                                <Text>
                                    Rating:{this.state.locationData.rating}
                                </Text>

                            </Body>
                        </CardItem>
                    </Card>

                </ScrollView>


            </Container >
        );
    }
}

