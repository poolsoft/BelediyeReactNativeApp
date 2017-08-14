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


import devLoop from '../../services';

const { width } = Dimensions.get('window')

export default class Genelbilgi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {

        let query = this.props.navigation.state.params.query;
        // let query = 'SELECT * FROM `tcontentlanguage` where `ContentID` =27';

        return devLoop.getAllByQuery(query).then((res) => {
            this.setState({
                isLoading: false,
                dataSource: res[0]
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
                        <Title> {this.props.navigation.state.params.title}</Title>
                    </Body>

                    <Right></Right>
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

