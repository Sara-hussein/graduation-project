import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Start from './Start';


export default function App() {
    return (
      <NavigationContainer>
      <MyStack />
      </NavigationContainer>
    );
  }

  const Stack = createStackNavigator();

  function MyStack() {
            return (
              <Stack.Navigator screenOptions={{headerShown: false}}> 
                <Stack.Screen  name="LoginScreen" component={Login} />
                <Stack.Screen  name="SignupScreen" component={Signup} />
                <Stack.Screen  name="StartScreen" component={Start} />
              </Stack.Navigator>
            );
          }














