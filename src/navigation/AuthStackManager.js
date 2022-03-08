import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import ConnectScreen from '../screens/ConnectScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const AuthStackManager = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} options={{ title: '' }} />
      <Stack.Screen name="Connect" component={ConnectScreen} options={{ title: '' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '' }} />
    </Stack.Navigator>
  );
};

export default AuthStackManager;
