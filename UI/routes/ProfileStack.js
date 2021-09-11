import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../Screens/Profile';
import Header from '../Shared/header';
import Editprofile from '../Screens/Editprofile';
import Picker from '../Screens/Picker'
import Picker2 from '../Screens/Picker2'
import Picker3 from '../Screens/Picker3'

const screens = {
    Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Profile' navigation={navigation} />
      }
    }
  },
  Editprofile: {
    screen: Editprofile,
    navigationOptions: {
      title: 'Editprofile',
    } 
  },
  Picker: {
    screen: Picker,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Picker' navigation={navigation} />
        
      }
    }
  },
  Picker2: {
    screen: Picker2,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Picker2' navigation={navigation} />
        
      }
    }
  },

  Picker3: {
    screen: Picker3,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Picker3' navigation={navigation} />
        
      }
    }
  },
}


const ProfileStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#FFF', height: 90 },
  }
});

export default ProfileStack;