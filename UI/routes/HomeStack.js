import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home';
import Header from '../Shared/header';
import Post from '../Screens/Post';
import  CalculateGPA from '../Screens/CalculateGPA';
import Expert from '../Screens/Expert';
import Department from '../Screens/Department'
import Cs from '../Screens/Cs';
import Is from '../Screens/Is';
import  Questions from '../Screens/Questions';
import Courses from '../Screens/Courses';
import  CalcTotalHours from '../Screens/CalcTotalHours';
import  Ai from '../Screens/Ai';
import  Gp from '../Screens/Gp';
import  Vote from '../Screens/Vote';
import  SummerTime from '../Screens/SummerTime';
import webDesign from '../Screens/webDesign';
import Graphics from '../Screens/Graphics';
import Programming from '../Screens/Programming';
import DB from '../Screens/DB';
import DWH from '../Screens/DWH';
import MM from '../Screens/MM';
import DSS from '../Screens/DSS';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Home' navigation={navigation} />
        
      }
    }
  },
 
  Post: {
    screen: Post,
    navigationOptions: {
      title: 'Posts',
    } 
  },

  Department: {
    screen: Department,
    navigationOptions: {
      title: 'Department',
    } 
  },
 Cs: {
    screen: Cs,
    navigationOptions: {
      title: 'Computer Science',
    }  
  },
  Is: {
    screen: Is,
    navigationOptions: {
      title: 'Information System',
    }  
  },
  CalculateGPA:{
    screen: CalculateGPA,
    navigationOptions: {
      title: 'CalculateGPA',
    }  
  },
  Expert:{
    screen: Expert,
    navigationOptions: {
      title: 'Expert',
    }  
  },
  Questions:{
    screen:  Questions,
    navigationOptions: {
      title: ' Questions',
    }  
  },
  Courses: {
    screen:  Courses,
    navigationOptions: {
      title: 'Courses',
    }  
  },
 Ai: {
    screen:  Ai,
    navigationOptions: {
      title: 'Ai',
    }  
  },
  DWH: {
    screen:  DWH,
    navigationOptions: {
      title: 'DWH',
    }  
  },
  MM: {
    screen:  MM,
    navigationOptions: {
      title: 'MM',
    }  
  },
  DSS: {
    screen:  DSS,
    navigationOptions: {
      title: 'DSS',
    }  
  },
  Gp: {
    screen:  Gp,
    navigationOptions: {
      title: 'Gp',
    }  
  },
  CalcTotalHours: {
    screen:  CalcTotalHours,
    navigationOptions: {
      title: ' CalcTotalHours',
    }  
  },
  Vote: {
    screen:  Vote,
    navigationOptions: {
      title: 'Vote',
    }  
  },
  SummerTime: {
    screen:  SummerTime,
    navigationOptions: {
      title: 'SummerTime',
    }  
  },
 webDesign : {
  screen:  webDesign,
  navigationOptions: {
    title: 'Web Design',
  }  
},
Programming : {
  screen:  Programming,
  navigationOptions: {
    title: 'Programming',
  }  
},
Graphics : {
  screen:  Graphics,
  navigationOptions: {
    title: 'Graphics',
  }  
},
DB : {
  screen:  DB,
  navigationOptions: {
    title: 'DB Admin',
  }  
},

};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#333',
    headerStyle: { backgroundColor: '#D6D6D6', height: 90 }
  }
});

export default HomeStack;