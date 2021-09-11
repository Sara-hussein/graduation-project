import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import CustomMultiPicker from "react-native-multiple-select-list";
import AwesomeAlert from 'react-native-awesome-alerts';
//import deviceStorage from '../services/deviceStorage';


 class CalcTotalHoursScreen extends React.Component  {

   constructor() {
    super();
    this.state = {
        viewSubjects: [],
        showAlert: false,
        GPA: 2
    };
   // device = new deviceStorage() ;
  } 
   componentDidMount() {
   
      this.getData();
    
  }
  async getData(){
   let data  = await fetch('http://192.168.1.8:3000/subject/all');
   let reso = await data.json();
   var names = reso.subjects.map(function(item) {
    return item['name'];
  }); 
  
   console.log(Object.assign({},names));
  
   this.setState({viewSubjects:names});
  
   
  }


    /*  userlist ={
          "123":"Is",
          "124":"DB1",
          "125":"Hr",
          "127":"PL1",
          "128":"CS",
          "129":"AI",
          "130":"IA",
          "131":"Math1",
          "132":"Math2",
          "133":"English",
          "134":"Quality",
          "135":"DW",
          "136":"Statistics                                                ",
          "137":"Ethics",
          "138":"Security",
          "139":"SW1",
          "140":"SW2"
      }*/

  render(){
  const ListOfsub = [];

    return  (
      <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <CustomMultiPicker
       // options={this.userlist}
       options={Object.assign({},this.state.viewSubjects)}
        search={true} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(res)=>{
          
          this.ListOfsub =res;
          console.log(res) }} // callback, array of selected items
        rowBackgroundColor={"#eee"}
        rowHeight={40}
        rowRadius={10}
        iconColor={"#53D6BB"}
        iconSize={30}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-add-circle"}
        scrollViewHeight={280}
        selected={[]} // list of options which are selected by default
      />
      <View style={styles.button}>
        <TouchableOpacity
        onPress={this.calculate}
        >
          <Text>Calculate Total Hours</Text>
        </TouchableOpacity>
      </View>
      <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message={`Your Total Hours is ${this.state.GPA}`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           this.setState({showAlert: false})
          }}
        />
      </ScrollView>
    </View>
      
   );
  }

  calculate=()=>{

    console.log(this.ListOfsub);
      fetch('http://192.168.1.8:3000/subject/totalhours',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
       // 'Authorization' : 'Bearer ' + device.getToken()  
      },
        body:JSON.stringify(this.ListOfsub)
        
    })
    .then(response => { return response.json();})
    .then(responseData => 
    
      {
        if(responseData){
          const total = responseData.total;
          
          console.log(total); 
          this.setState({GPA: total}, ()=>this.setState({showAlert: true}))
          
        }

      return responseData;})
 
  }

 
}
  



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  scroll: {
    width:"95%"
  },
  button: {
    backgroundColor: '#53D6BB',
    width:"60%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10
  }
});

export default CalcTotalHoursScreen;