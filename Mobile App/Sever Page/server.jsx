import MongodbBackend from '../mongodbBackend';
import { Text, SafeAreaView, Modal, TouchableOpacity, } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import {LinearGradient} from 'expo-linear-gradient'


const Server = (props) =>{

    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const ServerButton = ({title, onPress }) => (
        <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#00ffff", "#00008b"]}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
        </TouchableOpacity>
    );


    let db_string = MongodbBackend();
    let server_db = db_string.split(";")    

    let serverTempdata = parseInt(server_db[9]);
    let serverCpudata = parseInt(server_db[12]);
    let serverDiskdata = parseInt(server_db[15]);

    let serverTempcolor = server_db[10];
    let serverCpucolor = server_db[13];
    let serverDiskcolor = server_db[16];

    let serverTemp_satus = server_db[11];
    let serverCpu_satus = server_db[14];
    let serverDisk_satus = server_db[17];

    let serverIP_data = server_db[19];

    let network_data  = server_db[18] == undefined?NaN:server_db[18].trim()
    

    


    return(

        <Modal visible={props.visible} animationType="slide">

        
                <SafeAreaView style={styles.servercontainer}>

                    <SafeAreaView style={styles.serverIP}>
                        <Text style={styles.serverIPText}>IP Address - {serverIP_data}</Text>
                    </SafeAreaView>


                    <SafeAreaView style={styles.serverIPnode}>
                        <Text style={styles.serverIPnodeText}>:1880/ui</Text>
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverWifi}>
                        <Text style={styles.serverWifitext}>Network Name - {network_data}</Text>
                    </SafeAreaView>


                    <SafeAreaView style={styles.serverTempindicator}>
                        <CircularProgress
                        radius={55}
                        value={serverTempdata}
                        maxValue={100}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                        activeStrokeColor={serverTempcolor}
                        progressValueColor={serverTempcolor}
                        valueSuffix={'°C'}
                        inActiveStrokeColor={serverTempcolor}
                        inActiveStrokeOpacity={0.4}
                        
                        />
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverCpuindicator}>
                        <CircularProgress
                        radius={55}
                        value={serverCpudata}
                        maxValue={100}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                        activeStrokeColor={serverCpucolor}
                        progressValueColor={serverCpucolor}
                        valueSuffix={'%'}
                        inActiveStrokeColor={serverCpucolor}
                        inActiveStrokeOpacity={0.4}
                        
                        />
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverDiskindicator}>
                        <CircularProgress
                        radius={55}
                        value={serverDiskdata}
                        maxValue={100}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                        activeStrokeColor={serverDiskcolor}
                        progressValueColor={serverDiskcolor}
                        valueSuffix={'%'}
                        inActiveStrokeColor={serverDiskcolor}
                        inActiveStrokeOpacity={0.4}
                        
                        />
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverTempheader}>
                        <Text style={styles.serverTemptext}>Temperature</Text>
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverCpuheader}>
                        <Text style={styles.serverCputext}>CPU Load</Text>
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverDiskheader}>
                        <Text style={styles.serverDisktext}>Disk Usage</Text>
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverTempsatus}>
                        <Text style={styles.serverTempsatusText}>Status : {serverTemp_satus}</Text>
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverCpusatus}>
                        <Text style={styles.serverCpusatusText}>Status : {serverCpu_satus}</Text>
                    </SafeAreaView>

                    <SafeAreaView style={styles.serverDisksatus}>
                        <Text style={styles.serverDisksatusText}>Status : {serverDisk_satus}</Text>
                    </SafeAreaView>

                    <SafeAreaView>
                        <ServerButton title="Main Menu" size="sm" backgroundColor="#007bff" onPress={props.onCancel} />
                    </SafeAreaView>

                    <StatusBar
                        backgroundColor='#ffffff'
                        barStyle='dark-content'
                        hidden={false}
                    />
                    

                </SafeAreaView>
            

        </Modal>



    );



};

export default Server;

