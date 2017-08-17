import { Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginBottom: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    left: 0

  }, 
  image: {
    width: width,
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },
};