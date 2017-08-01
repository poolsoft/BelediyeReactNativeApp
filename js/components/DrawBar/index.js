import React from "react";
import { ListView, ActivityIndicator, View, AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  CardItem,
  Right
} from "native-base";

export default class DrawBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://necmettincimen-001-site1.itempurl.com/api/tCategory/1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static navigationOptions = {
    header: null
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "http://tedarik.malatya.bel.tr/Assets/Images/webtvlogo.png"
            }}
            style={{
              height: 80,
              resizeMode: "contain",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 120,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >

            </TouchableOpacity>
          </Image>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <CardItem
              button
              onPress={() => this.props.navigation.navigate("ListPage", rowData)}
            >
              <Text>{rowData.Identifier}</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            }
          />



        </Content>
      </Container>
    );
  }
}
