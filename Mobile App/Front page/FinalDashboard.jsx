import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Panel from '../component/Panel';
import Hydraulic from '../Hcomponent/Hydraulic';
import Server from '../Servercomponent/server';
import styles from "./styles";
import {LinearGradient} from 'expo-linear-gradient'





const FinalDashboard = () => {


    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const ServerVisibleButton = ({title, onPress }) => (
        <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#00ffff", "#000000"]}
            style={styles.serverappButtonContainer}
        >
            <Text style={styles.serverappButtonText}>{title}</Text>
        </LinearGradient>
        </TouchableOpacity>
    );

    const HydraulicVisibleButton = ({title, onPress }) => (
        <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#ff1493", "#8b0000"]}
            style={styles.hydraulicappButtonContainer}
        >
            <Text style={styles.hydraulicappButtonText}>{title}</Text>
        </LinearGradient>
        </TouchableOpacity>
    );

    const PanelVisibleButton = ({title, onPress }) => (
        <TouchableOpacity onPress={onPress}>
        <LinearGradient
            colors={["#ff1493", "#8b0000"]}
            style={styles.panelappButtonContainer}
        >
            <Text style={styles.panelappButtonText}>{title}</Text>
        </LinearGradient>
        </TouchableOpacity>
    );


    const [panelvisible, setpanelvisible] = useState(false);

    const [Hydraulicvisible, setHydraulicvisible] = useState(false);

    const [Servervisible, setServervisible] = useState(false);

    function startPanelMonitoring() {
        setpanelvisible(true);
    }

    function startHydraulicMonitoring() {
        setHydraulicvisible(true);
    }

    function startServerMonitoring() {
        setServervisible(true);
    }

    function endMonitoring() {
        setpanelvisible(false);
        setHydraulicvisible(false);
        setServervisible(false);
    }


    return (
        <SafeAreaView style={styles.Buttoncontainer}>

            <SafeAreaView style={styles.textviewcontainer}>
                <Text style={styles.textcontainer}>Machine Status</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.imagecontainer}>
                <Image style={styles.image} source={require('../assets/sfit.png')} />
            </SafeAreaView>
            

            <SafeAreaView>
                <PanelVisibleButton title="Electrical Panel" size="sm" backgroundColor="#007bff" onPress={startPanelMonitoring}/>
            </SafeAreaView>
            <Panel visible={panelvisible} onCancel={endMonitoring} />

            <SafeAreaView>
                <HydraulicVisibleButton title="Hydraulic" size="sm" backgroundColor="#007bff" onPress={startHydraulicMonitoring}/>
            </SafeAreaView>
            <Hydraulic visible={Hydraulicvisible} onCancel={endMonitoring} />

            <SafeAreaView>
                <ServerVisibleButton title="Server" size="sm" backgroundColor="#007bff" onPress={startServerMonitoring}/>
            </SafeAreaView>
            <Server  visible={Servervisible} onCancel={endMonitoring} />
                
            <StatusBar
                backgroundColor='#ffffff'
                barStyle='dark-content'
                //hidden={true}
            />
            
           
        </SafeAreaView>



    );

};

export default FinalDashboard;