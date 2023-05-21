
import { StyleSheet, SafeAreaView } from 'react-native';
import Back from './backhandler';
import LoginCredential from './Logincomponent/LoginDashboard';



  
export default function App() {
    
  //<Example/>
  //<Hydraulic/>
  //<Server/>
  //<FinalDashboard/>

   
  return (
    
    <SafeAreaView style={styles.container}>
      
      
      <LoginCredential/>
      
      <Back/>

      

    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
});


