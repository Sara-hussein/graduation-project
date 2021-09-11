import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text,FlatList, TextInput,ScrollView, SafeAreaView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';


export default class AiScreen extends React.Component {
  state = {
    showAlert: false,
    tutoriallink: '',
    tutoriallink2:'',
    Tutorials: [],
    Tutorials2: []
  };
  viewtutorials=()=> {
 
    fetch('http://192.168.1.8:3000/viewtutorials',{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }}).then(res => res.json()).
          then(result => {
            this.setState({ Tutorials: result.Tutorials })
            console.log(result.Tutorials)
          })
    
      }
        
    
  
      viewtutorials2=()=> {
      fetch('http://192.168.1.8:3000/viewtutorials2', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).
        then(results => {
          this.setState({ Tutorials2: results.Tutorials2 })
          console.log(results.Tutorials2)
        })
  
    }
  
  componentDidMount(){
    this.viewtutorials();
   this.viewtutorials2()
  }
render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Image source={require('./Images/programming.jpg')} style={styles.backgriundImage}>
        </Image>
      <ScrollView>
      <View style={styles.container}> 
      <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message={`Your link is added`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           this.setState({showAlert: false})
          }}
        />



       <View style={styles.inputThree}>
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Description</Text>    
          </View>
        </View>




          <View style={styles.Header}>
            <Text style={styles.text}>
            Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task. Programming involves tasks such as: analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms in a chosen programming language (commonly referred to as coding).
            </Text>    
          </View>




          <View style={styles.inputTwo}>
          
              <View style={styles.HeaderTwo}>
                <Text style={styles.textTwo}>Step 1 : Requirements</Text>    
              </View>
              


              <View styles={styles.Header}>
                <Text style={styles.text}>All links</Text>
              </View>
              <FlatList 

keyExtractor={(item,index) => index.toString()}
data={this.state.Tutorials}

renderItem={
  ({item})=>(

<View styles={styles.item}>
 
  <Text onPress={() => Linking.openURL(item)} style={styles.Link}>{item}</Text>

  
  </View>
  ) }  

/>
              {/* <View styles={styles.item}>
                <Text style={styles.Link}>Second link</Text>
              </View> */}


              <View style={{flexDirection:"row",alignItems:'center'}}>

                  <View style={styles.courseNameComponent}>
                        <View>
                           <TextInput placeholder="Link" multiline  style={styles.input}
                           onChangeText={(tutoriallink) => this.setState({ tutoriallink })}
                           value={this.state.tutoriallink}/>
                        </View>
                  </View>

                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.AddTutorial} >
                      <Text>Add tutorial</Text>
                    </TouchableOpacity>
                  </View>   
              </View>
          </View>
         




          <View style={styles.inputTwo}>
          
          <View style={styles.HeaderTwo}>
            <Text style={styles.textTwo}>Step 2 : Practice</Text>    
          </View>
          


          <View styles={styles.HeaderTwo}>
            <Text style={styles.text}>All links:</Text>
          </View>
          <FlatList 

keyExtractor={(item,index) => index.toString()}
data={this.state.Tutorials2}

renderItem={
  ({item})=>(

<View styles={styles.item}>
 
  <Text onPress={() => Linking.openURL(item)} style={styles.Link}>{item}</Text>

  
  </View>
  ) }  

/>
          {/* <View styles={styles.item}>
            <Text style={styles.Link}>Second link</Text>
          </View> */}


          <View style={{flexDirection:"row",alignItems:'center'}}>

              <View style={styles.courseNameComponent}>
                    <View>
                       <TextInput placeholder="Link" multiline  
                       style={styles.input} 
                       onChangeText={(tutoriallink2) => this.setState({ tutoriallink2 })}
                value={this.state.tutoriallink2}/>
                    </View>
              </View>

              <View style={styles.button}>
                <TouchableOpacity onPress={this.AddTutorial} >
                  <Text>Add tutorial</Text>
                </TouchableOpacity>
              </View>   
          </View>
      </View>
        
        </View>
        </ScrollView>
        </SafeAreaView>
    );}
    constructor(props) {
      super()
      this.state = {
        tutoriallink: '',tutoriallink2:'' ,Tutorials: [], Tutorials2: [],
  
      };
    }
    AddTutorial = () => {
  
  
      fetch('http://192.168.1.8:3000/addtutoriallink', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tutoriallink: this.state.tutoriallink,
          tutoriallink2:this.state.tutoriallink2
  
        })
      })
        .then((response) => response.json())
        .then((res) => {
          alert("link uplode")
  
        })
        .done()
    }
  
  
  

}
const styles = StyleSheet.create({
  container: {
    paddingLeft:5,
    paddingRight:5,
    //backgroundColor: '#89E1C4',
    
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
  inputThree: {
  
    padding: 7 ,
    borderRadius:5,
    marginTop:10,
    marginBottom:5,
    backgroundColor:'#D1F2EB',
   
  },

 button: {
   backgroundColor: '#BFF0E6',
   width:"30%",
   borderRadius:25,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   marginTop:5,
   marginLeft:20,
  
 },
input: {
  flexDirection: 'column',
  borderRadius: 5,
  width: 240, 
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
  borderColor: '#15908E', 
  borderWidth: 2, 
  padding: 7 ,
  alignItems:"flex-start",
  justifyContent:"flex-start",
  marginTop:10,
  marginBottom:5,
},


text:{
  fontWeight: 'bold',
  fontSize: 15,
  color:'#11927F',
  textShadowOffset:{width: 6, height: 6},

},
textTwo:{
  fontWeight: 'bold',
  fontSize: 20,
  color:'#33BBC1',
  textDecorationLine: 'underline',
  textShadowOffset:{width: 6, height: 6},

},

Link:{
  fontSize: 15,
  color:'blue',
  textDecorationLine: 'underline',
  marginTop:10,
  alignItems: 'flex-start',
},
courseNameComponent: {
  alignItems: 'flex-start',

},
backgriundImage: {
  width:'100%',
  height: '30%',
  justifyContent: 'center',
},
});