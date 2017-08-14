import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    Image,
    Text,
    TextInput,
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

import Search from 'react-native-search-box';

export default class HaritaDetay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            status: false
        }

        this._handleResults = this._handleResults.bind(this);
    }
    toggleStatus() {
        this.setState({
            status: !this.state.status
        });
    }

    componentDidMount() {

        let query = this.props.navigation.state.params.query;

        return devLoop.getAllMapPlacesByQuery(query).then((res) => {
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

            this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(res.results),
                markers: res.results
            });
        });

    }

    _handleResults() {
        debugger;

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        debugger;
        this.setState({ dataSource: ds.cloneWithRows(results) });

        debugger;
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
                        <Title>{this.props.navigation.state.params.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.toggleStatus()}>
                            <Icon active name="search" />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>

                    <View >

                        {this.state.status &&
                            <Search
                                ref={(ref) => this.searchBar = ref}
                                backgroundColor="#FF8E00"
                                placeholder="Ara"
                                data={this.state.dataSource}
                                handleResults={this._handleResults}
                                showOnLoad
                            />
                        }
                    </View>

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
                            }}>

                            {this.state.markers.map(marker => (
                                <MapView.Marker
                                    key={marker.id.toString()}
                                    coordinate={{
                                        latitude: marker.geometry.location.lat,
                                        longitude: marker.geometry.location.lng,
                                    }}
                                    title={marker.name}
                                />
                            ))}

                        </MapView>

                    </View>

                    <CardItem style={{ backgroundColor: '#FF8E00' }}>
                        <Icon name='paper-plane' style={{ color: 'white' }} />
                        <Text style={{ color: 'white', alignSelf: 'center' }}>{this.props.navigation.state.params.title}</Text>
                    </CardItem>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Haritaicerik", rowData)}
                            >
                                <Card>
                                    <CardItem>
                                        <Icon name='map' style={{ color: '#FF8E00' }} />
                                        <Text numberOfLines={1}>{rowData.name}</Text>
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

