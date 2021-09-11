import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
let qeus =
[
    
    {
        Q: "do you intersted in AI and Machine Learning field?",  ///0
        yesIndex :1 ,
        noIndex : 2,
    },
   
    {
        Q: "Did you interested in PL1,DS and Algorithms content?",  ///1
        yesIndex : 3 ,
        noIndex : 4,
    },
    {
        Q: "Did you interested in IS,DB1 and OR content?",  //////2
        yesIndex : 17 ,
        noIndex : 18,
    },
    {
        Q: "Do you interested in problem solving, coding and gaming?",  /////3
        yesIndex : 5,
        noIndex : 6,
    },
    {
        Q: "Did you interested in IS,DB1 and OR content?", /////4
        yesIndex : 11 ,
        noIndex : 12,
    },
    {
        Q: "did you like pl2 project that were done with java programming language?",  //////5
        yesIndex : 7,
        noIndex : 8,
    },
    {
        Q: "Do you interested in data analysis?", ////6
        yesIndex : 9,
        noIndex : 10,
    },
    {
        Q: "do you want to know how the computer translate the code?",  /////7
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in robots and feel excited to know more about it?",  ////8
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "Did you interested in IS,DB1 and OR content?", /////9
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "Do you interested in robots and feel excited to know more about it?",///10
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Are you intersted Data analysis?",///11
        yesIndex : 13,
        noIndex : 14,
    },
    {
        Q: "did you like pl2 project that were done with java programming language?",///12
        yesIndex : 15 ,
        noIndex : 16,
    },
    {
        Q: "Do you interseted in typing queries?",///13
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "did you feel comfort when you were making sw1 project diagrams?",///14
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in problem solving, coding and gaming?",///15
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "do you want to know how the computer translate the code?",//16
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interseted in typing queries?",///17
        yesIndex : 19 ,
        noIndex : 20,
    },
    {
        Q: "did you like pl2 project that were done with java programming language?",///18
        yesIndex : 25 ,
        noIndex : 26,
    },
    {
        Q: "Do you interested in data analysis?",///19
        yesIndex : 21 ,
        noIndex : 22,
    },
    {
        Q: "Did you interested in PL1,DS and Algorithms content?",///20
        yesIndex : 23,
        noIndex : 24,
    },
    {
        Q: "do you want to gain more experience in how the systems work?",///21
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "did you feel comfort when you were making sw1 project diagrams?",////22
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you intersted in Problem solving?",////23
        yesIndex : 31,
        noIndex : 31,
    },
    {
        Q: "do you want to gain more experience in how the systems work?",////24
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in problem solving, coding and gaming?",////25
        yesIndex : 27 ,
        noIndex : 28,
    },
    {
        Q: "Do you interseted in typing queries?",////26
        yesIndex : 29 ,
        noIndex : 30,
    },
    {
        Q: ",Do you interested in robots and feel excited to know more about it?",////27
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "do you want to gain more experience in how the systems work?",////28
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "did you feel comfort when you were making sw1 project diagrams?",//29
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Do you interested in data analysis?",///30
        yesIndex : 31 ,
        noIndex : 31,
    },
    {
        Q: "Please press on CALCULATE button",//////31
        yesIndex : 31 ,
        noIndex : 31,
    },]

export default function Expert () {
    const [started, setStarted] = useState(false)
    const [answers, setAnswers] = useState([])
    const [result, setResult] = useState(0)
    const [index, setIndex] = useState(0)
    const [showAlert, setShow] = useState(false)

    calculate=()=>{
        console.log(answers)
        fetch('http://192.168.1.8:3000/answer',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
          body:JSON.stringify(
              
  
                  answers
          )
          
      })
      .then((response)=>response.json())
      .then(responsejson=>{
        setResult(JSON.stringify(responsejson))
        setShow(true)
           })
      
      }    
        
   
    
console.log(answers)
    const next = ()=>{
        if(qeus.length - 1 > 0){
        (answers[index])
        if (answers[index] == true)
            setIndex([qeus[index].yesIndex])
        else if(answers[index] == false)
            setIndex([qeus[index].noIndex])

        }
        else{
            console.log('Questions Ended')
        }
    }

    return(
<ImageBackground source={require('./Images/Home.jpg')} style={styles.backgriundImage}>
 <AwesomeAlert
            show={showAlert}
            showProgress={false}
            message={`based on your answers we suggest that your suitables ${result} `}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="OK"
            confirmButtonColor="#009F7D"
            onConfirmPressed={() => {
            setShow(false)
            }}
          />            
            {!started && 
            <View>
                <View style={styles.Header}>
                    <Text style={styles.text}>Please click on the start button to answer some questions</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.startButton}>
                        <TouchableOpacity
                            onPress={
                            () => { setStarted(true) }
                        }
                        >
                            <Text style={styles.startButtonText}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            }
            {started && (
            <View>
                <View>
                    <Text style={styles.Qtext}>{qeus[index].Q}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => {
                                let newAnswers = answers
                                newAnswers.push(true)
                                setAnswers(newAnswers)
                                next()
                            }}
                        >
                            <Text style={styles.buttonText}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => {
                                let newAnswers = answers
                                newAnswers.push(false)
                                setAnswers(newAnswers)
                                next()
                            }}
                        >
                            <Text style={styles.buttonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            )}
             <View style={styles.button}>
        <TouchableOpacity
 onPress={()=>calculate()}        >
          <Text style={styles.buttonText}>CALCULATE</Text>
        </TouchableOpacity>
      </View>
        </ImageBackground>
    );
    
}
const styles = StyleSheet.create({
    backgriundImage: {
        width: "100%",
        height: "100%",
      },
    insideBackground: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        paddingHorizontal: 40
    },
    Header:{
        marginTop:65,
        flexDirection: "row",
        justifyContent: 'space-around', 
        paddingTop: 7,
        paddingBottom: 7,
        justifyContent: "center",
        alignContent: "center"
      },
    text:{
        fontWeight: 'bold',
        fontSize: 24,
        color:'#000',
        fontStyle: 'italic',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:20,
        paddingLeft: 6,
        paddingRight:6,
        textAlignVertical: "center",
        textAlign: "center",
        },
    Qtext:{
        fontWeight: 'bold',
        fontSize: 35,
        color:'#fff',
        fontStyle: 'italic',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:20,
        textAlignVertical: "center",
        textAlign: "center",
        marginTop: 200
    },
    buttonText:{
        color:'#01614E',
        fontSize: 22,
    },
    button: {
        backgroundColor: '#fff',
        width:"43%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        marginBottom:1
    },
    startButton: {
        backgroundColor: '#009E7F',
        width:"60%",
        borderRadius:25,
        height:80,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        marginBottom: 40,
    },
    startButtonText:{
        color:'#333',
        fontStyle: 'italic',
        fontSize: 35,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        justifyContent: "space-around",
    },
    
  });