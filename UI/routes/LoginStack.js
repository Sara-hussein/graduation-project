import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screens/Login';
import Header from '../Shared/header';
import Signup from '../Screens/Signup'


const screens = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Login' navigation={navigation} />
      }
    }
  },
  Signup:{
    screen: Signup,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Signup' navigation={navigation} />
      }
    }
  },
}

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#15D8D5', height: 90 },
  }
});

export default LoginStack;