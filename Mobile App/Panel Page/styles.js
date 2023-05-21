
import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const style = StyleSheet.create({



    panelcontainer: {
      flex: 1,
      flexDirection:'row'
    
    },
    tempstatusText:{
      fontWeight: '600',
      fontSize: responsiveFontSize(2.5),
      marginTop: responsiveHeight(65),
      marginLeft:responsiveWidth(5),
      color:'#ffffff',
      position: 'absolute'
    },
    humistatusText:{
      fontWeight: '600',
      fontSize: responsiveFontSize(2.5),
      marginTop: responsiveHeight(65),
      marginLeft: responsiveWidth(56),
      //alignItems: 'center',
      color:'#ffffff',
      position: 'absolute'
    },
    tempHeader:{
      marginTop: responsiveHeight(31),
      marginLeft:responsiveWidth(7),
      fontWeight: '600',
      fontSize: responsiveFontSize(3.2),
      color:'#ffffff',
      position: 'absolute'

    },
    humiHeader:{
      marginBottom: 10,
      marginTop: responsiveHeight(31),
      marginLeft:responsiveWidth(62),
      fontSize: responsiveFontSize(3.2),
      fontWeight: '600',
      color:'#ffffff',
      position: 'absolute'

    },
    tempIndicator: {
      marginVertical:responsiveHeight(42),
      marginHorizontal:responsiveWidth(5.5),
      position: 'absolute'
      
      
    },
    humiIndicator: {
      marginVertical:responsiveHeight(42),
      marginHorizontal:responsiveWidth(56.5),
      position: 'absolute'
      
    },
    lampImage:{
      width: responsiveWidth(60),
      height: responsiveHeight(20),
      resizeMode:'contain',
      
      
    },
    lampImageContainer:{
      marginTop: responsiveHeight(5),
      marginLeft:responsiveWidth(24),
      position: 'absolute'

    },

    buttonContainer: {
    elevation: 10,
    borderRadius: responsiveWidth(10),
    marginVertical:responsiveHeight(80),
    marginHorizontal:responsiveWidth(31),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(6.2),
    position: 'absolute'
      
    },
    appButtonText: {
      fontSize: responsiveFontSize(2),
      color: "#fff",
      fontWeight: "500",
      alignSelf: "center",
      textTransform: "uppercase"
    }

  });

  export default style;