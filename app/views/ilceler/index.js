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
    List,Thumbnail
} from "native-base";


//import HTMLView from 'react-native-htmlview';


import devLoop from '../../services';

const { width } = Dimensions.get('window')


export default class ilceler extends Component {
  static navigationOptions = {
    header: null
  };
   constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
         let query = "SELECT  `Header` ,  `Description` ,  `SpotImage` FROM  `tcontentlanguage` WHERE  `ContentID` >28 AND  `ContentID` <43 ORDER BY  `tcontentlanguage`.`Header` ASC LIMIT 0 , 30"

    return devLoop.getAllByQuery(query).then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
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
          <Text style={{ color: '#2980b9' }}>Bilgiler Yükleniyor Lütfen Bekleyiniz </Text>
          <ActivityIndicator size="large" color="#f1c40f" style={{
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
                        <Title style={{
                            fontSize: 20,
                            textAlign: 'center',
                            margin: 10,
                        }}>İlçelerimiz</Title>
                    </Body>

                </Header>
               <View style={{flex: 1, paddingTop: 20}}>
        

           <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("HaberDetay", rowData)}
                            >
                                <Card>
                                    <CardItem>
                                        <Icon name='map' style={{ color: '#FF8E00' }} />
                                        <Text numberOfLines={1}>{rowData.Header}</Text>
                                        <Right>
                                            <Icon color="#FF8E00" name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        }
                    />
       
      </View>

    

            </Container>

        );
    }
}

