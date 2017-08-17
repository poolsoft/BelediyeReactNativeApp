import React, { Component } from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image
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
        backgroundColor: 'white'
      }}>
        <StatusBar
          backgroundColor="white"
        />
<Image source={require('../../images/LOGO.png')}
style={{height:200,width:250,
resizeMode:'stretch'}}/>

        <ActivityIndicator size="large" color="#FF8E00" style={{
          marginTop: 30
        }} />

      </View>
         
        );
    }
}

