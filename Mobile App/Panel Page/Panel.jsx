import MongodbBackend from "../mongodbBackend";
import { Text,Modal, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import {LinearGradient} from 'expo-linear-gradient'




const Panel = (props) => {


  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const PanelBackButton = ({title, onPress }) => (
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
  let db_data = db_string.split(";")
  let tempdata  = parseInt(db_data[0])
  let humiditydata = parseInt(db_data[3])
  let lampdata = parseInt(db_data[20])
  // Temperature UI control
  let temp_color = db_data[1]
  let temp_status = db_data[2]


  // Humidity UI control
  let humidity_color = db_data[4]
  let humidity_status = db_data[5]

  let lamp_color = lampdata == 0?require('../assets/lampON.png'):require('../assets/lampoff1.png');
  

    return(
      <Modal visible={props.visible} animationType="slide">

        <ImageBackground source={require('../assets/panel3.jpg')} style={styles.panelcontainer}>
        <SafeAreaView style={styles.panelcontainer}>

          <SafeAreaView style={styles.lampImageContainer}>
            <Image source={lamp_color}style={styles.lampImage}/>
          </SafeAreaView>

          <Text style={styles.tempHeader}>Temperature</Text>
          
          <SafeAreaView style={styles.tempIndicator}>
            <CircularProgress
              radius={75}
              value={tempdata}
              activeStrokeWidth={20}
              inActiveStrokeWidth={20}
              //textColor={'yellow'}
              activeStrokeColor={temp_color}
              progressValueColor={temp_color}
              valueSuffix={'°C'}
              inActiveStrokeColor={temp_color}
              inActiveStrokeOpacity={0.5}
            />
          </SafeAreaView>

          <SafeAreaView>
            <Text style={styles.tempstatusText}>Status: {temp_status}</Text>
          </SafeAreaView>


          <Text style={styles.humiHeader}>Humidity</Text>
          <SafeAreaView style={styles.humiIndicator}>
            <CircularProgress
              radius={75}
              value={humiditydata}
              activeStrokeWidth={20}
              inActiveStrokeWidth={20}
              //textColor={'#222'}
              valueSuffix={'%'}
              activeStrokeColor={humidity_color}
              progressValueColor={humidity_color}
              inActiveStrokeColor={humidity_color}
              inActiveStrokeOpacity={0.4}
            />
          </SafeAreaView>

          <SafeAreaView >
            <Text style={styles.humistatusText}>Status: {humidity_status}</Text>
          </SafeAreaView>

          

          <SafeAreaView >
            <PanelBackButton title="Main Menu" size="sm" backgroundColor="#007bff" onPress={props.onCancel}/>
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

export default Panel;




  