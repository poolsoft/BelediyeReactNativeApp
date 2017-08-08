import React, { Component } from "react";

import {
  StatusBar,
  View,
  Image,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native';

import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";

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

import { Grid, Row } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";

import Swiper from 'react-native-swiper';
import styles from "./styles";

class Home extends Component {

  static navigationOptions = {
    header: null
  };

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.navigation.state.params),
    };
    console.log(this.state.dataSource)
  }

  render() {

    console.log(DrawNav, "786785786");
    return (

      <Container style={styles.container}>

        <Header style={styles.header}>
          <Left>

            <Button transparent onPress={() => DrawerNav.navigate("DrawerOpen")}>
              <Icon active name="menu" />
            </Button>

          </Left>

          <Body>
            <Title >Malatya Belediyesi</Title>
          </Body>

        </Header>
        <Content>

          <Swiper style={styles.wrapper} height={250}
            loop showsButtons>
            <View style={styles.slide}>
              <Image resizeMode='stretch' style={styles.image} source={require('../../../images/sanat_sokagi.jpg')} />

            </View>
            <View style={styles.slide} >
              <Image resizeMode='stretch' style={styles.image} source={require('../../../images/sire_pazari.jpg')} />
            </View>
            <View style={styles.slide} >
              <Image resizeMode='stretch' style={styles.image} source={require('../../../images/hurriyet_parki_2.jpg')} />
            </View>
            <View style={styles.slide} >
              <Image resizeMode='stretch' style={styles.image} source={require('../../../images/yasam_merkezi.jpg')} />
            </View>
          </Swiper>



          <CardItem style={{ backgroundColor: '#2980b9' }}>
            <Icon name='paper-plane' style={{ color: 'white' }} />
            <Text style={{ color: 'white', alignSelf: 'center' }}>HABERLER</Text>

          </CardItem>


          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("NewsDetail", rowData)}
              >
                <Card>
                  <CardItem
                  >
                    <Icon name='paper' style={{ color: '#2980b9' }} />
                    <Text numberOfLines={1}>{rowData.Header}</Text>
                    <Right>
                      <Icon name="arrow-forward" />
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

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};

export default DrawNav;
