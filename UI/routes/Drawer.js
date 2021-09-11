import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer  } from 'react-navigation';
import {MaterialIcons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ProfileStack from './ProfileStack';
import SlideBar from '../components/SlideBar';
import Login from '../Screens/Login';



// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({

  Home: {
    screen: HomeStack,
    navigationOptions:{
      
      title: "Home",
      drawerIcon: ()=> <MaterialIcons name='home' size={28}  />
      
    }
   
  },

  Profile: {
    screen: ProfileStack,
    navigationOptions:{
      
      title: "Profiles",
      drawerIcon: ()=> <MaterialIcons name='person' size={28}  />
    }
    
  },

  About: {
    screen: AboutStack,
    navigationOptions:{
      
      title: "About",
      drawerIcon: ()=>  <MaterialIcons name='lightbulb' size={28}  />
      //drawerIcon: ()=> <MaterialIcons name="emoji-people"
    }
   
  },

  Logout: {
    screen: Login,
    navigationOptions:{
      
      title: "Logout",
      drawerIcon: ()=> <MaterialIcons name='logout' size={28} />
     
    }
   
  },


},
{
   contentComponent: props => <SlideBar {...props}/>,
   hideStatusBar: true,

   contentOptions:{
     activeBackgroundColor:"#05A7A4",
     activeTintColor: "#01706E",
     itemContainerStyle:{
       marginTop: 3,
       marginHorizontal: 10
     },
     itemStyle:
     {
       borderRadius: 10
     }
   }

},


);

export default createAppContainer(RootDrawerNavigator);