import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/SplachScreen';
import LoginScreen from '../screens/LoginScreen';
import PermissionScreen from '../screens/PermissionScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

type RootStack = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  PermissionScreen: undefined;
  HomeScreen: undefined;
  DetailScreen: {url: string};
};

const Stack = createNativeStackNavigator<RootStack>();

const StackNativator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="PermissionScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export type {RootStack};
export default StackNativator;
