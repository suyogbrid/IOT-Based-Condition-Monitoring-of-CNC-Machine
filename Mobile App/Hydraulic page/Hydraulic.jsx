import MongodbBackend from '../mongodbBackend';
import { SafeAreaView, Text, View,Modal, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import {LinearGradient} from 'expo-linear-gradient'





const Hydraulic = (props) => {
  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  const HydraulicBackButton = ({title, onPress }) => (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#00ffff", "#00008b"]}
            style={styles.buttonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
  );



  let db_string = MongodbBackend();
  let db_data =  db_string.split(";")
  let hydraulicdata  = parseInt(db_data[6])

  // hydraulic UI control
  let temp_color =   db_data[7]      
  let temp_status =  db_data[8]


  
  

  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground source={require('../assets/panel3.jpg')} style={styles.Hydrauliccontainer}>
        <SafeAreaView style={styles.Hydrauliccontainer}>
          <SafeAreaView>
            <Text style={styles.header}>HYD Temperature</Text>
          </SafeAreaView>
          
          <SafeAreaView style={styles.hydraulicIndicator}>
            <CircularProgress
              radius={90}
              value={hydraulicdata}
              activeStrokeWidth={25}
              inActiveStrokeWidth={25}
              activeStrokeColor={temp_color}
              progressValueColor={temp_color}
              valueSuffix={'°C'}
              inActiveStrokeColor={temp_color}
              inActiveStrokeOpacity={0.5}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.status}>
            <Text style={styles.statusText}>Status : {temp_status}</Text>
          </SafeAreaView>

          <SafeAreaView >
              <HydraulicBackButton title="Main Menu" size="sm" backgroundColor="#007bff" onPress={props.onCancel}/>
          </SafeAreaView>

          <StatusBar
            barStyle='dark-content'
            hidden={true}
          />
        </SafeAreaView>
      </ImageBackground>
    </Modal>
  );
};

export default Hydraulic;
