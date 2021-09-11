import {Entypo, } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity, } from "react-native-gesture-handler";
import { View, Text, Image, StyleSheet,ImageBackground ,_ScrollView } from "react-native";
import React from 'react';



export default class ProfileScreen extends React.Component {
  render() {
      return (
        
        
           
       <View style={styles.BG}>
          <ScrollView>
        <View style={styles.Container}>
				<View style={styles.Header}>
        <View style={styles.Row}>
          <Image source={require('./Images/4.jpg')} style={styles.Profile}/>
						<View style={{ paddingLeft: 10 }}>
            <View style={styles.User}>
            <Text style={styles.ppText}>Nourhan Magdy</Text></View>
            <View style={styles.Row}>
            <View style={styles.ppTime}>
            <Text style={styles.dateText}>1/13/2021</Text></View>
							</View>
						</View>
					</View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Editprofile")}>
            <View style={{marginRight:30}}>
            <Entypo
              name='edit'
              size={20}
              color='#333'
             
            />
            </View>
          </TouchableOpacity>
				</View>
				</View>
        <View style={styles.Separator}/>
        <View style={styles.direction}>
        <Entypo name='user'  size={20} color='#94C2CB' />
        <Text style={styles.profileText}>Nourhan Magdy</Text>
        </View>
        <View style={styles.direction}>
        <Entypo name='old-phone' size={20} color='#94C2CB' />
        <Text style={styles.profileText}>01068815530</Text>
        </View>
        <View style={styles.direction}>
        <Entypo name='mail' size={20} color='#94C2CB' />
        <Text style={styles.profileText}>Noramgd99@gmail.com</Text>
        </View>
        <View style={styles.direction}>
        <Entypo name='location' size={20} color='#94C2CB' />
        <Text style={styles.profileText}>395-T Hadayq El-Ahram</Text>
        </View>
        <View style={styles.BottomDivider}/>
        <View style={styles.direction}>
        
        <Text style={styles.ppText}>-Gender:</Text>
        <Text style={styles.text2} >Female</Text>
        </View>
        <View style={styles.direction}>
        
        <Text style={styles.ppText}>-Level:</Text>
        <Text style={styles.text2} >Four</Text>
        </View>
        <View style={styles.direction}>
       
        <Text style={styles.ppText}>-Department:</Text>
        <Text style={styles.text2} >Computer science</Text>
        </View>

        </ScrollView>
      </View> 
         
      
      );
    }
  }


  const styles = StyleSheet.create({
    BG: {
      flex: 1,
      backgroundColor: "#fff",
    
    },
  Container:{
    flex: 1,  
  },
  Header:{
    height: 100,
    flexDirection: "row",
    alignItems:"center",
   justifyContent:'space-between',
   marginTop: 5,
   padding: 10,
  },
  Profile:{
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    //borderColor: "#333",
    marginHorizontal: 5,
    marginVertical:5,
   },
  Row:{
    alignItems:"center",
    flexDirection: "row",
  },

  User:{
    fontSize: 12,
    fontWeight: 'bold',
    color: "#05A7A4",
  },

  Separator:{
    width: '95%',
    marginLeft:10,
    marginBottom:10,
    height: 2,
    backgroundColor: "#333",
  },
  ppText:{
    fontSize: 18,
    color: "#333",
    fontWeight:'bold',
    
  },
  profileText:{
    fontSize: 18,
    color: "#333",
    //fontWeight:'bold',
    marginLeft:10,
    
  },
  dateText:{
    fontSize: 12,
    color: "#333",
  },
  direction:{
    flexDirection: "row",
    marginTop:15,
    marginLeft:20,
  },
  direction2:{
    flexDirection:"column",
    marginTop:15,
    marginLeft:20,
  },
  BottomDivider:{
    width: '100%',
    height:3,
    marginTop:10,
    backgroundColor: "#333",
 },
 text2:
 {
   //textDecorationLine:"underline",
   fontSize:16,
   marginTop:3,
   marginLeft:5,
   color:"#0F92AC",
  },
  });