// import { NavigationContainer } from 'react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import CarList from './assets/components/CarList/CarList';
import Navbar from './assets/components/Navbar/Navbar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './assets/components/Login/Login';
import StyledButton from './assets/components/StyledButton/StyledButton';

// function LoginScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Login Screen</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StyledButton
        style={styles.newcontainer}
        type="primary"
        content="new Order"
        onPress={() => navigation?.navigate('Login')}
      ></StyledButton>
      <Navbar navigation={navigation}></Navbar>

      <CarList navigation={navigation}></CarList>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen style={styles.top} name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1700,
  },
  newcontainer: {
    zIndex: 2000,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 200,
  },
});
