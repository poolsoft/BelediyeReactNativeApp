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
export default class HaritaDetay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {

        let query = this.props.navigation.state.params.query;
        // let query = 'SELECT * FROM `tcontentlanguage` where `ContentID` =27';

        return devLoop.getAllMapPlacesByQuery(query).then((res) => {
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

            this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(res.results),
            });
        });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: '#FF8E00' }}>Bilgiler Yükleniyor Lütfen Bekleyiniz </Text>
                    <ActivityIndicator color="#FF8E00" style={{
                        marginTop: 30
                    }} />
                </View>
            );
        }
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
                        }}>{this.props.navigation.state.params.title}</Title>
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
                        {
                            this.state.dataSource.map((rowData) => {
                                <MapView.Marker
                                    coordinate={rowData.geometry.location}
                                />
                            })
                        }
                    </MapView>




                </View>

                <ScrollView>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("HaberDetay", rowData)}
                            >
                                <Card>
                                    <CardItem>
                                        <Icon name='map' style={{ color: '#FF8E00' }} />
                                        <Text numberOfLines={1}>{rowData.name}</Text>
                                        <Right>
                                            <Icon color="#FF8E00" name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        }
                    />

                </ScrollView>


            </Container >
        );
    }
}

