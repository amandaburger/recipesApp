import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    topPhoto: {
      width: 400,
      height: 300,
    },
    welcomeText: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Arial Rounded MT Bold',
      }
  });
  
const Login = () => {
  return (
    <View>
    <Image 
    style={styles.topPhoto}
    source={require('./../Assets/Images/kylepic.jpg')}/>
      <Text style={styles.welcomeText}>Welcome! It's Burger's Recipe App for Kyle</Text>
    </View>
  );
}

export default Login;
