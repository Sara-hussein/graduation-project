import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, ImageBackground,  StyleSheet } from "react-native";


export default class  CoursesScreen extends React.Component {
    render() {
      return (
        
        <ImageBackground
          source={require("./Images/Home.jpg")}
          style={styles.backgriundImage}
        >
           
          <ScrollView>
           
      <View style={styles.titlestyle}>
            <Text style={styles.titletextstyle}>
              ..Courses..
            </Text>
            </View>
            
      <View style={styles.header}>
        
           
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Ai")}
                style={styles.button } >
                <Text style={styles.text}>Ai</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("MM")}
                style={styles.button} >
                <Text style={styles.text}>MM</Text>
              </TouchableOpacity>
              
              </View>
             
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("DSS")}
                style={styles.button} >
                <Text style={styles.text}>DSS</Text>
              </TouchableOpacity>
              
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("DWH")}
                style={styles.button} >
                <Text style={styles.text}>DWH</Text>
              </TouchableOpacity>
              
              </View>
            </View>
            
            </ScrollView>
        
            </ImageBackground>
        
      );
    }
  }


  const styles = StyleSheet.create({

    backgriundImage: {
        width: "100%",
        height: "100%",
      },
    ////////////////////////////
  
    ////////////////////////////
    header:{
      paddingHorizontal: 100, 
      justifyContent:'center',
      alignContent:'center',
    },
   text:
   {
   fontSize:20,
   color:"#333",
   fontWeight:'bold',
   fontStyle:'italic'
  },
    ////////////////////////////
    button:{
      alignItems: "center", 
      justifyContent: "center",  
      height: 66, 
      width: 200, 
      borderRadius: 15, 
      backgroundColor: "#A1DED2",
      marginVertical:20 
    },
    
    titlestyle:
    {
      flexDirection: 'column',
      borderRadius: 10,
      width: '100%', 
      padding:10 ,
      marginTop:20,
      alignItems : "center",
      
     
    },
    ////////////////////
    titletextstyle:
    {
      fontWeight: 'bold',
      fontSize: 50,
      color:'#DEDEDE',
      textDecorationLine: 'none',
      textShadowOffset:{width: 6, height: 6},
      textShadowRadius:100,
      
    },
    

    
    
  });