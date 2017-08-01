import {
  Dimensions,
  StyleSheet
} from "react-native";

const { width } = Dimensions.get('window')

export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 18,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',

  },
  image:{
    width: width * 0.5,
    overflow: 'visible',
    height:500  
  }
};
