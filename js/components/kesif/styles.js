import { Dimensions, StyleSheet } from "react-native";
export default {


    map: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        position: 'absolute',
        ...StyleSheet.absoluteFillObject
    },
     container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
};