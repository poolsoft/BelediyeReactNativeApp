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
              <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
      }}>
        <StatusBar
          backgroundColor="black"
        />


        <ActivityIndicator size="large" color="#2980b9" style={{
          marginTop: 30
        }} />

      </View>
         
        );
    }
}

