import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Entypo, MaterialCommunityIcons, } from '@expo/vector-icons';
import Picker from './Picker';
import Picker2 from './Picker2';
import Picker3 from './Picker3';
export default class EditprofileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        email: "",
        EditUsername: "",
        EditEmail: "",
        EditPassword: ""
      }
    }
  }
  render() {
    const {email,EditUsername, EditEmail,EditPassword}=this.state.formdata;
    return (
        <View style={styles.BG}>
      <View style={styles.container}>
        

        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <MaterialCommunityIcons name='email' size={20}  color='#94C2CB'/>
        </View>
          <TextInput style={styles.inputText} 
           placeholder="current mail"  
           placeholderTextColor="#003f5c" 
           onChangeText={email => 
            this.setState( provState=>({
              formdata:{
                ...provState.formdata,
                email
              }
            }))
          }
          value={email} />
        </View>

        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <MaterialCommunityIcons name='mail' size={20} color='#94C2CB'/>
        </View>
          <TextInput style={styles.inputView} 
             placeholder="New E-mail"
             placeholderTextColor="#003f5c" 
             onChangeText={EditEmail => 
              this.setState( provState=>({
                formdata:{
                  ...provState.formdata,
                  EditEmail
                }
              }))
            }
            value={EditEmail}  />
        </View>
        <View style={styles.inputView} >
        <View style={styles.Icon}>
            <Entypo name='user' size={20} color='#94C2CB'   />
        </View>
        
        <TextInput style={styles.inputText}
            placeholder="New Username"  
            placeholderTextColor="#003f5c" 
            onChangeText={EditUsername => 
              this.setState( provState=>({
                formdata:{
                  ...provState.formdata,
                  EditUsername
                }
              }))
            }
            value={EditUsername}
              />
        </View>

        

        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <MaterialCommunityIcons name='form-textbox-password' size={20}  color='#94C2CB'/>
        </View>
          <TextInput style={styles.inputText}
            placeholder="New Password"  
            placeholderTextColor="#003f5c" 
            onChangeText={EditPassword => 
              this.setState( provState=>({
                formdata:{
                  ...provState.formdata,
                  EditPassword
                }
              }))
            }
            value={EditPassword}
              />
        </View>

        


        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <Entypo name='old-phone' size={20} color='#94C2CB' />
        </View>
          <TextInput style={styles.inputText}  placeholder="Phone"   placeholderTextColor="#003f5c"  />
        </View>


        <View style={styles.inputView} >
        <View style={styles.Icon}>
        <Entypo name='location' size={20} color='#94C2CB' />
        </View>
          <TextInput style={styles.inputText}  placeholder="Address"   placeholderTextColor="#003f5c"  />
        </View>

        <View style={styles.row}>
        <View style={styles.column}> 
        <Text style={styles.ppText}>Gender :</Text>
        <View style={ styles.pick}>
        <Picker /> 
        </View>
        </View>
        <View style={styles.column}> 
        <Text style={styles.ppText}>Level :</Text>
        <View style={ styles.pick}>
        <Picker2 /> 
        </View>
        </View>

        <View style={styles.column}> 
        <Text style={styles.ppText}>Department :</Text>
        <View style={ styles.pick}>
        <Picker3 /> 
        </View>
        </View>
        </View>

        <TouchableOpacity 
        onPress={this._Edit}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>Edit</Text>
        </TouchableOpacity>
       
      </View>

      </View>

    );
  }
  
  _Edit = async() => {
    try{
      await fetch('http://192.168.1.7:3000/editProfile',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(this.state.formdata),
      }).then(response =>response.text())
      .then(responsejson=>{
        alert(JSON.stringify(responsejson));
      }).catch((error)=>{
        console.error(error);
      });
     
    }
    catch(error){
alert(error)

    }
    
    alert(JSON.stringify(this.state.formdata));
  }
}
const styles = StyleSheet.create({
    BG: {
        flex: 1,
        backgroundColor: '#BFF0E6',
      
      },
  container: {
    flex: 1,
    margin:20,
  },
  tinyLogo: {
    width: 240,
    height: 80,
    marginBottom: 20

  },
  inputView: {
    width: "90%",
    backgroundColor: "#F0F3F4",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    flexDirection:"row",
  },
  inputText: {
    height: 50,
    color: "black"
  },
  loginBtn: {
    width: "40%",
    backgroundColor: "#1A6F4E",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:50,
    marginLeft:100,
  },
  loginText: {
    color: "white",
    fontSize:18,
  },
Icon:{
     margin:15,
  },
  ppText:{
    fontSize: 18,
    color: "#333",
    fontWeight:'bold',
    marginLeft:2,
    marginBottom:3,
  },
  pick:
  {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333",
    width:"90%",
    backgroundColor:"#fff",

  },
row:
{
    flexDirection:"row",
},
column:
{
    flexDirection:"column",
    marginRight:5,
},
});
 