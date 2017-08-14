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

                    <Image source={{ uri: 'https://seeklogo.com/images/M/malatya-belediyesi-logo-832ED34E86-seeklogo.com.png' }}
                        style={{ resizeMode: 'contain', height: 150, width: 150, alignSelf: 'center' }} />

                    <List>

                        <ListItem
                            button
                            onPress={() => this.props.navigation.navigate("Anasayfa")}>

                            <Text><Icon name="home" style={{ color: '#FF8E00' }} />  Anasayfa</Text>
                        </ListItem>

                        <ListItem
                            button
                            onPress={() => this.props.navigation.navigate("Genelbilgi",{ query: 'SELECT * FROM `tcontentlanguage` where `ContentID` = 22',title:'Başkanımız' })}>

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

                    </List>

                </Content>
            </Container>
        );
    }
}

