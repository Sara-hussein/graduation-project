import React, { Component } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        username: "",
        email: "",
        password: "",
        showAlert: false,

      }
    }
  }
  render() {

    const {username,email,password}=this.state.formdata;
  

    return (
      <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('./Images/T.png')}
        />
           <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
        
          message={`You're signup successifully`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           this.setState({showAlert: false})
           this.props.navigation.replace('LoginScreen')

          }}
        />
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={username => 
              this.setState( provState=>({
                formdata:{
                  ...provState.formdata,
                username
                }
              }))
            }
            value={username} 
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => 
              this.setState( provState=>({
                formdata:{
                  ...provState.formdata,
                email
                }
              }))
            }
            value={email} 
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={password => 
              this.setState( provState=>({
                formdata:{
                  ...provState.formdata,
                password
                }
              }))
            }
            value={password} 
          />
        </View>

        <TouchableOpacity
          onPress={this._saveData}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => 
          this.props.navigation.replace("LoginScreen")}>
          <Text style={styles.loginTextNew}>LogIn</Text>
        </TouchableOpacity>
  

      </View>
    );
  }

  _saveData = async() => {
    try{
      await fetch('http://192.168.1.8:3000/register',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(this.state.formdata),
      }).then(response =>response.text())
      .then(responsejson=>{
        this.setState({responsejson}, ()=>this.setState({showAlert: true}))

      }).catch((error)=>{
        console.error(error);
      });
     
    }
    catch(error){

    }
    
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
    width: 240,
    height: 80,
    marginBottom: 20

  },
  inputView: {
    width: "80%",
    backgroundColor: "#F0F3F4",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  tinyLogo: {
    width: 270,
    height: 200,
    marginBottom:10
    
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#1A6F4E",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },

});
