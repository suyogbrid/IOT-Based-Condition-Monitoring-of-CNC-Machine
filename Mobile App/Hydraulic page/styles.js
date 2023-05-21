
import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const style = StyleSheet.create({


  Hydrauliccontainer: {
    flex: 1,
    flexDirection:'row'
  },

  status: {
    marginVertical:responsiveHeight(58),
    marginHorizontal:responsiveWidth(31),
    position: 'absolute'

  },
  statusText: {
    fontWeight: '600',
    fontSize: responsiveFontSize(3),
    color: '#ffffff',
  },
  header: {
    marginVertical:responsiveHeight(18),
    marginHorizontal:responsiveWidth(25),
    fontWeight: '500',
    fontSize: responsiveFontSize(3.3),
    color: '#ffffff',
    position: 'absolute'


  },
  hydraulicIndicator: {
    marginVertical:responsiveHeight(30),
    marginHorizontal:responsiveWidth(30),
    position: 'absolute'
  },
  buttonContainer: {
    elevation: 10,
    borderRadius: responsiveWidth(10),
    marginVertical:responsiveHeight(75),
    marginHorizontal:responsiveWidth(33),
    paddingVertical: responsiveHeight(1.4),
    paddingHorizontal: responsiveWidth(5),
    position: 'absolute'
      
    },
    appButtonText: {
      fontSize: responsiveFontSize(2.3),
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
    
});

  export default style;