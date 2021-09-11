import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../Screens/About';
import Header from '../Shared/header';


const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About Our Faculty' navigation={navigation} />
      }
    }
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#15D8D5', height: 90 },
  }
});

export default AboutStack;