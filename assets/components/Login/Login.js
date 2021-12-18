import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { theme } from './src/core/theme';

import Dashboard from './LoginScreens/Dashboard';
import StartScreen from './LoginScreens/StartScreen';
import RegisterScreen from './LoginScreens/RegiserScreen';
import LoginScreen from './LoginScreens/LoginScreen';

const Stack = createStackNavigator();

const Login = () => {
  return (
    <Provider>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Login;
