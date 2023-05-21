import { StyleSheet, SafeAreaView } from 'react-native';
import FinalDashboard from '../Finalcomponent/FinalDashboard';
import Back from '../backhandler';
import LoginPage from './LoginPage';
import React, { useState, useEffect } from 'react';
import MongodbBackendLogin from './LoginDB';

export default function LoginCredential() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  let credential = MongodbBackendLogin()

  
  let userString = credential == undefined?"":credential.split(';')[22]
  let passString = credential == undefined?"":credential.split(';')[23]

  
  
 console.log(userString)
 console.log(passString)
  const handleLogin = (userId, password) => {
    if (userId === userString.trim() && password === passString.trim()) {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect User ID or Password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <>
          <FinalDashboard />
          <Back />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});   
