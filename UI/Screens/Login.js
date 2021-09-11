import React, { Component } from 'react';
import {Alert , StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, AsyncStorage } from 'react-native';
import 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import AwesomeAlert from 'react-native-awesome-alerts';



export default class Login extends Component {
  state={
    email:"",
    password:"" ,
    showAlert: false,

  }
  
  render(){
    return (
      <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('./Images/T.png')}
        />
         <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message={`You're LogedIN`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           this.setState({showAlert: false})
           this.props.navigation.replace('StartScreen')

          }}
        />
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={(email)=>this.setState({email})}
            value={this.state.email}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={(password)=>this.setState({password})}
            value={this.state.password}/>
        </View>
        <TouchableOpacity
        onPress={() => 
         this.login()}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => 
          this.props.navigation.replace('SignupScreen')}
        >
          <Text style={styles.loginTextNew}>Signup</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
  
  constructor(props){
    super(props)
    this.state={email:'',password:''}

  }


  login=()=>{
        
    
    fetch('http://192.168.1.8:3000/login',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password,
      })
  })
  .then((response)=>response.json())
  .then((res)=>{
    
      this.setState({res}, ()=>this.setState({showAlert: true}))
   
  })
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFF0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 270,
    height: 200,
    marginBottom:10
    
  },
  inputView:{
    width:"80%",
    backgroundColor:"#F0F3F4",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"#1A6F4E",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#1A6F4E",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:15,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  loginTextNew:{
    color:"#1A6F4E"
  }
});
