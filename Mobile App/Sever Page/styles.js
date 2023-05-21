import { StyleSheet } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const style = StyleSheet.create({

servercontainer: {
    //flex: 1,
    //backgroundColor: '#f5fffa',
    flexDirection:'row'
  },
  serverTempindicator: {         // 160 differnce
    marginVertical:responsiveHeight(22),
    marginHorizontal:responsiveWidth(5.5),
    position: 'absolute'
  },
  serverCpuindicator: {
    marginVertical:responsiveHeight(42),
    marginHorizontal:responsiveWidth(5.5),
    position: 'absolute'
    
  },
  serverDiskindicator: {
    marginVertical:responsiveHeight(62),
    marginHorizontal:responsiveWidth(5.5),
    position: 'absolute'
    
  },
  serverTempheader:{
    marginVertical:responsiveHeight(22),       // 0 differnce
    marginHorizontal:responsiveWidth(55),
    position: 'absolute'
  },
  serverTemptext:{
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color:'#000000',
  },
  serverCpuheader:{
    marginVertical:responsiveHeight(42),
    marginHorizontal:responsiveWidth(55),
    position: 'absolute'
  },
  serverCputext:{
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color:'#000000',
  },
  serverDiskheader:{
    marginVertical:responsiveHeight(62),
    marginHorizontal:responsiveWidth(55),
    position: 'absolute'
  },
  serverDisktext:{
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color:'#000000',
  },
  serverTempsatus:{
    marginVertical:responsiveHeight(31),
    marginHorizontal:responsiveWidth(55),
    position: 'absolute'
  },
  serverTempsatusText:{
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color:'#000000',
  },
  serverCpusatus:{
    marginVertical:responsiveHeight(51),       //70difference
    marginHorizontal:responsiveWidth(55),
    position: 'absolute'
  },
  serverCpusatusText:{
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color:'#000000',
  },
  serverDisksatus:{
    marginVertical:responsiveHeight(71),       //60 difference
    marginHorizontal:responsiveWidth(55),
    position: 'absolute'
  },
  serverDisksatusText:{
    fontSize: responsiveFontSize(2.2),
    fontWeight: '500',
    color:'#000000',
  },
  serverIP:{
    marginVertical:responsiveHeight(5.6),       
    marginHorizontal:responsiveWidth(7.8),
    position: 'absolute'
  },
  serverIPText:{
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color:'#000000',
  },
  serverIPnode:{
    marginVertical:responsiveHeight(5.6),       
    marginHorizontal:responsiveWidth(72),
    position: 'absolute'
  },
  serverIPnodeText:{
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color:'#000000',
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: responsiveWidth(10),
    marginVertical:responsiveHeight(82.5),
    marginHorizontal:responsiveWidth(26),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(12),
    position: 'absolute'
  },
  appButtonText: {
    fontSize: responsiveFontSize(2),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  serverWifi:{
    marginVertical:responsiveHeight(12.5),       
    marginHorizontal:responsiveWidth(7.8),
    position: 'absolute'

  },
  serverWifitext:{
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color:'#000000',

  }



});


export default style;