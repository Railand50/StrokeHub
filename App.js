import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>Home</Text>  
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => console.log()} style={styles.button}>         
          <Text style={styles.buttonTitle}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log()} style={styles.button}>         
          <Text style={styles.buttonTitle}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',   
  },

  header: {
    height: 100,  
  },

  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 40,
    marginLeft: 20,
    color: '#18435A',
  },

  body: {
    
  },

  button: {
    margin: 20,
    backgroundColor: '#18435A',
    alignItems: 'center',
    justifyContent: 'center',  
    borderRadius: 20

  },

  buttonTitle: {
    margin: 20,
    color: 'white'
  },

  
});
