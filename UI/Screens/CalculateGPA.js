import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground,Alert, TouchableOpacity, Text, TextInput, ScrollView, TextComponent } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AwesomeAlert from 'react-native-awesome-alerts';


export default function CalculateGPA () {
  var a,b;
  //const [selectedValueOne, setSelectedValueOne] = useState('');
  const [gpa, setGpa] = useState();
  const [calculatedGPA, setCalculatedGPA] = useState(3)
  const [hour, setHour] = useState();
  const [credit, setCredit] = useState([]);
  const [score, setScore] = useState([]);
  const [arr,setArr] = useState([]);
  const [showAlert, setShow] = useState(false)
  //console.log(Object.assign({},score));
 
  const GPA=()=>{
    fetch('http://192.168.1.8:3000/GPA',{
      method:'POST',
      headers:{
        'Accept':'application/json,text/plain',
        'Content-Type':'application/json'
      },
        body: JSON.stringify({

         "score":score,
         
          "credit":credit,
          "hour":parseInt(hour),
          "gpa":parseFloat(gpa)
           
        })
        
    })
    .then((response)=>response.json())
    .then(responsejson=>{
       
         setCalculatedGPA(JSON.stringify(responsejson))
         setShow(true)
      
    })
    }    
      
  return (
    
        <View style={styles.container}>
          <ImageBackground source={require('./Images/gpa-calculator.jpg')} style={styles.backgriundImage}>
          </ImageBackground>
          <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message={`Your GPA is ${calculatedGPA}`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           setShow(false)
          }}
          />
          <View style={styles.Header}>
            <Text style={styles.text}>Course Name</Text>
            <Text style={styles.text}>Grade</Text>
            <Text style={styles.text}>Course Credits</Text>
          </View>
          <ScrollView>
          {arr.map((val, index) => 
          <View style={styles.subContainer}>
            <View style={styles.courseNameComponent}>
              <View>
                <TextInput
                  placeholder="Course name"
                  style={styles.input}
                />
              </View>
            </View>

            <View>
              <Picker
               
                  selectedValue={score.length>0? score[index]:""}
                  style={
                      {height: 50, width: 100, justifyContent:'center'}
                  }
                  onValueChange = {
                      val => {
                        const allScores = [...score]
                        allScores[index] = val 
                        setScore(allScores)
                    }
                  }>
                  <Picker.Item label="GRADE" value="" />
                  <Picker.Item label="A+" value="A+" />
                  <Picker.Item label="A" value="A" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="B" value="B" />
                  <Picker.Item label="C+" value="C+" />
                  <Picker.Item label="C" value="C" />
                  <Picker.Item label="D+" value="D+" />
                  <Picker.Item label="D" value="D" />
                  <Picker.Item label="F" value="F" />
                </Picker> 
              </View>

            <View style={styles.courseInputComponent}>
              <View>
                <TextInput
                  placeholder="Course hours"
                  style={styles.input}
                  value={val}
                  onChangeText={(val) =>{
                    setCredit([...credit,val])
                   
                   // this.setState({score: itemValue})
                    }
                  }/>
              </View>
            </View>
          </View>
          )} 
          

          <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <TouchableOpacity
                  onPress={
                  () => {
                    setArr([...arr,1])
                  }
                  }
                  >
                    <Text>+ Add Course</Text>
                  </TouchableOpacity>
                </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Current GPA"
                  style={styles.newInput}
                  value={gpa}
                  onChangeText={text=>setGpa(text)}
                  />
                <TextInput
                  placeholder="Total Credits"
                  style={styles.newInput}
                  value={hour}
                  onChangeText={text=>setHour(text)}
                  />
                </View>
                <View style={styles.button}>
                  <TouchableOpacity
                   onPress={()=>GPA()}
                  >
                    <Text>Calculate GPA</Text>
                  </TouchableOpacity>
                </View>
          </View> 
          </ScrollView>
        </View>
        
    );
                }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingLeft:5,
    paddingRight:5,
    
  },
  subContainer: {
    flexDirection: "row",
    paddingTop: 5,
    justifyContent:'space-evenly'
   },
  Header:{
    flexDirection: "row",
    justifyContent: 'space-around', 
    paddingTop: 7,
    paddingBottom: 7
  },
  backgriundImage: {
    flex: 0.48,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  head: {
    height: 40, backgroundColor: '#BFF0E6' 
   },
 buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10
 },
 button: {
   backgroundColor: '#BFF0E6',
   width:"40%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:20,
   marginBottom:1
 },
 picker: {
  borderRadius: 5,
  borderWidth: 1.5, 
  borderColor: '#A1DED2'
 },
inputContainer: {
  flexDirection: 'row',
  paddingTop:20
},
input: {
  flexDirection: 'column',
  borderRadius: 5,
  width: '130%', 
  borderColor: '#A1DED2', 
  borderWidth: 2, 
  padding: 7 
},
newInput: {
  flexDirection: 'column',
  width: '50%', 
  borderColor: '#A1DED2', 
  borderWidth: 2, 
  padding: 7 
},
text:{
  fontWeight: 'bold',
  fontSize: 18,
  color:'#05B28F',
  textDecorationLine: 'underline',
  fontStyle: 'italic',
  textShadowOffset:{width: 6, height: 6},
  textShadowRadius:20,
},
courseNameComponent: {
  alignItems: 'center',
},
courseInputComponent: {
  alignItems: 'center'
},
scroll:{
  margin:10
}
});