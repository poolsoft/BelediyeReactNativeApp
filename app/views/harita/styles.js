import { Dimensions } from "react-native";

const { width } = Dimensions.get('window')

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    fontWeight:'700',
    color: '#FF8E00'
  },
  instructions: {
    marginBottom: 5,
  },
});