import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window')

export default {
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  container: {

    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#ecf0f1'
  },
  instructions: {
    marginTop: 30
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    left: 0

  },
  cardslide: {
    top: -30,
    bottom: -30

  },
  cardbody: {
    alignItems: 'center',
    justifyContent: 'center',

  },

  image: {
    width: width,
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  newstext: {

    fontSize: 18,
    left: 5

  },
  header:
  {
    backgroundColor:'#2980b9'
  }
};