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
                        />  
                    </MapView>

                </View>

               

            </Container >
        );
    }
}

