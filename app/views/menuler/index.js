import React, { Component } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';

import {
    Container,
    Content,
    List,
    ListItem,
    Icon,
    Thumbnail
} from 'native-base';

import styles from './styles';
import devLoop from '../../services';

export default class Menuler extends Component {
    render() {
        return (
            <Container>
                <Content>

                    <Image source={require('../../images/LOGO.png')}
                        style={{ resizeMode: 'contain', height: 150, width: 150, alignSelf: 'center' }} />

                    <List>

                        <ListItem
                            button
                            onPress={() => this.props.navigation.navigate("Anasayfa")}>

                            <Text><Icon name="home" style={{ color: '#FF8E00' }} />  Anasayfa</Text>
                        </ListItem>

                        <ListItem
                            button
                            onPress={() => this.props.navigation.navigate("Baskan")}>

                            <Text><Icon name="person" style={{ color: '#FF8E00' }} />  Belediye Başkanımız</Text>
                        </ListItem>

                        <ListItem
                            button
                            onPress={() => this.props.navigation.navigate("Malatya")}>

                            <Text><Icon name="heart" style={{ color: '#FF8E00' }} />  Malatyam</Text>
                        </ListItem>
                        <ListItem
                            button
                            onPress={() => this.props.navigation.navigate("Harita")}>

                            <Text><Icon name="map" style={{ color: '#FF8E00' }} />  Malatya'yı Keşfet</Text>
                        </ListItem>
                          <ListItem
                            button
                            onPress={() => this.props.navigation.navigate("Hakkimizda")}>

                            <Text><Icon name="ios-star-half" style={{ color: '#FF8E00' }} />Hakkımızda</Text>
                        </ListItem>

                    </List>

                </Content>
            </Container>
        );
    }
}

