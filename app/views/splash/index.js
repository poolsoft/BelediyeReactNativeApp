import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

import styles from './styles';
import devLoop from '../../services';

export default class Splash extends Component {
    componentDidMount() {
        let query = 'SELECT `Header`,`Description`,`SpotImage` FROM `tcontentlanguage` ORDER BY  `tcontentlanguage`.`ContentID` DESC LIMIT 0 , 30';

        devLoop.getAllByQuery(query).then((res) => {
            this.props.navigation.navigate("Anasayfa", res)
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FF8E00" />

                <Text style={styles.welcome}>
                    Malatya Büyükşehir Belediyesi
        </Text>
                <ActivityIndicator color="white" style={styles.instructions} />
            </View>
        );
    }
}

