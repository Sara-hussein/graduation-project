import React from 'react';
import { StyleSheet, View,  TouchableOpacity, Text,  ScrollView, ImageBackground, Image  } from 'react-native';


export default class Cs extends React.Component {


    render() {
        return (
          
          <ImageBackground source={require("./Images/18.jpg")}style={styles.backgriundImage}>
            <Image source={require('./Images/IS.jpg')} style={styles.Image}>
            </Image>
            <ScrollView>
            <View  style={styles.container}>
          <View style={styles.inputTwo}>
          <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>About Computer science department</Text>    
          </View>
          </View>
          <View >
            <Text style={{color:'#fff'}}>Cs is a rapidly advancing technology, 
              Made possible by the Internet, that may soon have significant impacts on our everyday lives. 
              AI traditionally refers to an artificial creation of human-like intelligence that can learn, R
              eason, plan, perceive, or process natural language[1] . 
              These traits allow AI to bring immense socioeconomic opportunities, 
              while also posing ethical and socio-economic challenges.
              As AI is an Internet enabled technology</Text>
          
          </View>
         
          
          <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Cs mandarory courses</Text>    
          </View>
          </View>

          
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("About")}>
                    <Text>Ai</Text>
                    </TouchableOpacity>
                </View>   
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Multimedia</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Concepts</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Parallel</Text>
                    </TouchableOpacity>
                </View>   
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Graphics</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Sw2</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Cs optional courses</Text>    
          </View>
          </View>

          
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Ai</Text>
                    </TouchableOpacity>
                </View>   
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Multimedia</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Concepts</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Ai</Text>
                    </TouchableOpacity>
                </View>   
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Multimedia</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Concepts</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Ai</Text>
                    </TouchableOpacity>
                </View>   
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Multimedia</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Concepts</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Parallel</Text>
                    </TouchableOpacity>
                </View>   
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Graphics</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.button}>
                    <TouchableOpacity >
                    <Text>Sw2</Text>
                    </TouchableOpacity>
                </View> 
            </View>
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
    ///////
  container: {
    flex: 5, 
    paddingLeft:5,
    paddingRight:5,
    //backgroundColor: '#89E1C4',
    
  },
  containerr: {
    flex: 1, 
    marginHorizontal: 1,

    
  },
  Header:{
    flexDirection: "row",
    justifyContent: "center", 
    paddingTop: 7,
    paddingBottom: 7
  },
  HeaderTwo:{
    flexDirection: "row",
    justifyContent: 'flex-start', 
    paddingTop: 7,
    paddingBottom: 7
  },
  backgriundImage: {
    flex: 10,
    marginTop:10,
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'flex-end',
  },
  
 button: {
   backgroundColor: '#eee',
   width:"30%",
   borderRadius:20,
   marginHorizontal:5,
   height:50,
   alignItems:'center',
   justifyContent:'center',
   marginTop:10,
   marginBottom:10,
 },
input: {
  flexDirection: 'column',
  borderRadius: 5,
  width: 300, 
  borderColor: '#A1DED2', 
  borderWidth: 2, 
  padding: 7 ,
  alignItems:"center",
  justifyContent:"center",
  marginTop:10,
  marginBottom:1,
 
},
inputTwo: {
  flexDirection: 'column',
  borderRadius: 5,
  width: '100%', 
  borderColor: 'transparent', 
  borderWidth: 2, 
  padding: 7 ,
  alignItems:"flex-start",
  justifyContent:"flex-start",
  marginTop:10,
  marginBottom:5,
 
},
inputThree: {
  flexDirection: 'column',
  borderRadius: 10,
  width: '100%', 
 
  padding: 7 ,
  alignItems:"flex-start",
  justifyContent:"flex-start",
  marginTop:10,
  marginBottom:5,
  backgroundColor:'#33BBC1',
 
},


textTwo:{
  fontWeight: 'bold',

  fontSize: 20,
  color:'#fff',
  //textDecorationLine: 'underline',
  textShadowOffset:{width: 6, height: 6},

},

courseNameComponent: {
  alignItems: 'flex-start',

},
scroll:{
  margin:10
},
buttoncontainer:
{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center'
    
},
Image: {
    width:'100%',
    height: '25%',
    justifyContent: 'center',
  },
});