import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground,  StyleSheet } from "react-native";


export default class  DepartmentScreen extends React.Component {
    render() {
      return (
        
        <ImageBackground
        source={require("./Images/Home.jpg")}
        style={styles.backgriundImage}
        >
            <View style={{justifyContent:"center"}}>
            <ScrollView>
         
              <View style={styles.titlestyle}>
              <Text style={styles.titletextstyle}>Summer Time</Text>
              </View>
              
        <View style={styles.header}>
          
             
                <View style={{paddingBottom:20}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("webDesign")}
                  style={styles.button } >
                  <Text style={styles.text}>Web Design</Text>
                </TouchableOpacity>
                </View>

                <View style={{paddingBottom:20}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Graphics")}
                  style={styles.button} >
                  <Text style={styles.text}>Graphics</Text>
                </TouchableOpacity>
                </View>
               
                <View style={{paddingBottom:20}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Programming")}
                  style={styles.button} >
                  <Text style={styles.text}>Programming</Text>
                </TouchableOpacity>
                </View>

                <View style={{paddingBottom:20}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("DB")}
                  style={styles.button} >
                  <Text style={styles.text}>DB admin.</Text>
                </TouchableOpacity>
                </View>
              
              </View>
              
              </ScrollView>
            </View>
          
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
      alignItems:"center",
      justifyContent: "center"
    
    },
   text:
   {
     fontSize:18,
     color:"#333",
     fontWeight:'bold',
     fontStyle:'italic'
  },
    ////////////////////////////
    button:{
      height: 50, 
      width: 180, 
      borderRadius: 15, 
      backgroundColor: "#A1DED2",
      marginHorizontal:1,
      marginVertical:9, 
      alignItems:"center",
      justifyContent: "center"
    },
    
    titlestyle:
    {
      padding:5 ,
      paddingBottom:20,
      marginTop:20,
      marginHorizontal:15,
      alignItems:"center",
      justifyContent: "center"
    },
    ////////////////////
    titletextstyle:
    {
      fontWeight: 'bold',
      fontSize: 40,
      color:'#fff',
      textDecorationLine: 'none',
      fontStyle: 'italic',
      textShadowOffset:{width: 6, height: 6},
      textShadowRadius:20,
      alignItems:"center",
      justifyContent: "center",
    },
    

    
    
  });