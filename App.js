import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarList from './assets/components/CarList/CarList';
import Navbar from './assets/components/Navbar/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <CarList></CarList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
