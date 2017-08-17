import React, { Component } from 'react';
import {
    StatusBar,
    View,
    Image,
    Text,
    ListView,
    TouchableOpacity
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

import styles from "./styles";
import devLoop from '../../services';


export default class Anasayfa extends Component {
    constructor(props) {
        super(props);

       
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.state = {
                dataSource: ds.cloneWithRows(this.props.navigation.state.params),
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
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Malatyam</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>

                <Content>

                    <Swiper style={styles.wrapper} height={250}
                        loop showsButtons autoplay>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/sanat_sokagi.jpg')} />

                        </View>
                        <View style={styles.slide} >
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/sire_pazari.jpg')} />
                        </View>
                        <View style={styles.slide} >
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/hurriyet_parki_2.jpg')} />
                        </View>
                        <View style={styles.slide} >
                            <Image resizeMode='stretch' style={styles.image} source={require('../../images/yasam_merkezi.jpg')} />
                        </View>
                    </Swiper>

                    <CardItem style={{ backgroundColor: '#FF8E00' }}>
                        <Icon name='paper-plane' style={{ color: 'white' }} />
                        <Text style={{ color: 'white', alignSelf: 'center' }}>HABERLER</Text>
                    </CardItem>


                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("HaberDetay", rowData)}
                            >
                                <Card>
                                    <CardItem>
                                        <Icon name='paper' style={{ color: '#FF8E00' }} />
                                        <Text numberOfLines={1} style={{width:250}}>{rowData.Header}</Text>
                                        <Right>
                                            <Icon color="#FF8E00" name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        }
                    />

                </Content>

            </Container>

        );
    }
}

