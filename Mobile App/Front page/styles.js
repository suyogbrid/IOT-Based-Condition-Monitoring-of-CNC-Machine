import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const style = StyleSheet.create({



    Buttoncontainer: {
      //flex: 1,
      flexDirection:'row',
      backgroundColor: '#ffffff',  
    },
    
    image: {
      width: responsiveWidth(100),
      height: responsiveHeight(100),
      resizeMode:'contain'
      
    },

    imagecontainer: {
      marginVertical:responsiveHeight(-6),
      marginHorizontal:responsiveWidth(2.5),
      position: 'absolute'
    },

    textviewcontainer:{

      marginVertical:responsiveHeight(17),
      marginHorizontal:responsiveWidth(14),
      position: 'absolute'

    },
    textcontainer:{

      fontWeight: 'normal',
      fontSize: responsiveFontSize(5),
      fontWeight: "bold",
      alignItems: 'center',
      color:'#ff1493',

    },
    serverappButtonContainer: {
      elevation: 10,
      borderRadius: responsiveWidth(10),
      marginVertical:responsiveHeight(85),
      marginHorizontal:responsiveWidth(27),
      paddingVertical: responsiveHeight(1.4),
      paddingHorizontal: responsiveWidth(14),
      position: 'absolute'
    },
    serverappButtonText: {
      fontSize: responsiveFontSize(2.5),
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    hydraulicappButtonContainer: {
      elevation: 10,
      borderRadius: responsiveWidth(10),
      marginVertical:responsiveHeight(67),
      marginHorizontal:responsiveWidth(55),
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(10),
      position: 'absolute'
    },
    hydraulicappButtonText: {
      fontSize: responsiveFontSize(1.9),
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    panelappButtonContainer: {
      elevation: 10,
      borderRadius: responsiveWidth(10),
      marginVertical:responsiveHeight(67),
      marginHorizontal:responsiveWidth(4),
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(4),
      position: 'absolute'
    },
    panelappButtonText: {
      fontSize: responsiveFontSize(1.9),
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },

    
  });

  export default style;