import {Entypo, MaterialCommunityIcons, } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View,FlatList, Text, Image, StyleSheet,ImageBackground,TextInput,_ScrollView ,CheckBox} from "react-native";
import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import CustomMultiPicker from "react-native-multiple-select-list";



export default class PostScreen extends React.Component {


     
      state={
        showAlert: false,
    question:"",
    choice1:"",
     choice2:"",
     questions:[],
     viewchoice1:[],
     viewchoice2:[],
   data:[],
   vot:"",
   vot2:""
   
     
      }
         
  componentDidMount() {
     this.viewQuestion();
}

viewQuestion=()=> {
  fetch('http://192.168.1.8:3000/ShowVotes', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).
  then(results => {
    this.setState({ data: results.data })
    console.log(results.data)
  })
}
vote1=()=>{
  console.log(this.state.vot);
  fetch('http://192.168.1.8:3000/VoteNumber1',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
     // 'Authorization' : 'Bearer ' + device.getToken()  
    },
      body:JSON.stringify({vot:this.state.vot})
      
  })
  .then(response => { return response.json();})
  .then(responseData => 
    
    {
      if(responseData){
       
        alert("done")
      }

    return responseData;})

}
vote2=()=>{
  console.log(this.state.vot2);
  fetch('http://192.168.1.8:3000/VoteNumber2',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
     // 'Authorization' : 'Bearer ' + device.getToken()  
    },
      body:JSON.stringify({vot2:this.state.vot2})
      
  })
  .then(response => { return response.json();})
  .then(responseData => 
    
    {
      if(responseData){
       
        alert("done")
      }

    return responseData;})

}

  render() {
    
      return (
        
        <ScrollView>
        
       <ImageBackground source={require("./Images/post.jpg")}  style={styles.backgriundImage} >
       <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message={`Your vote is added`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           this.setState({showAlert: false})
          }}
        />
       <View style={styles.Row2}>
           <View style={styles.searchView}>
                <TextInput placeholder="write Your question" multiline  style={styles.searchtext}
                onChangeText={(question)=>this.setState({question})}
            value={this.state.question}/>
                <View style={styles.Row}>
                <Text style={{marginLeft:10,fontSize:15,}}>Option1:</Text>
                
                <TextInput placeholder="write Your first choice" multiline  style={styles.votetext}
                onChangeText={(choice1)=>this.setState({choice1})}
            value={this.state.choice1}/>
                </View>
                <View style={styles.Row}>
                <Text style={{marginLeft:10,fontSize:15,}}>Option2:</Text>
                <TextInput placeholder="write Your second choice" multiline  style={styles.votetext}
                onChangeText={(choice2)=>this.setState({choice2})}
            value={this.state.choice2}/>
                </View>
            </View>
            <TouchableOpacity onPress={this.vote}>
            <View style={styles.column}>
            <View style={styles.Icon}>
                <MaterialCommunityIcons name='arrow-right-bold-circle-outline' size={25}  color='#333'/>
              </View>
              <Text style={styles.Textblack}>Post</Text>
            </View>
            </TouchableOpacity>
        </View>

       <FlatList
keyExtractor={(item, index) => index.toString()}
data={this.state.data}

renderItem={
  
  ({ item }) => (          
    <View styles={styles.item}>
                      <View style={styles.Header}>
                        <View style={styles.Row}>
                          <Image source={require('./Images/4.jpg')} style={styles.Profile} />

                        </View>

                      </View>
                      <View style={{ paddingLeft: 10 }}>
                        <View style={styles.User}>
                          <Text style={styles.ppText}>Nourhan Magdy</Text>
                        </View>

                      </View>
                                               
{/* ///////////question/////////// */}
     <View >      
    <Text style={{marginLeft:30,fontSize:18,color:"#fff"}}>{item.question}</Text>
    </View>

{/* //////////////////choice1 and vote1 */}
    <View style={styles.TextCount}>
            <Text style={{marginLeft:15,fontSize:18,color:"#fff"}}>{item.vote1}</Text>
              </View>
    <TouchableOpacity onPress={()=>{
         this.state.vot=item.choice1
      console.log("vot",(this.state.vot)) 
     }}>        
           <View style={styles.Row2}>   
           <View style={styles.searchView}>
                <View style={styles.Row}>
                <MaterialCommunityIcons  size={25}  color='#333'/>
                <Text style={{marginLeft:15,fontSize:18,}} value={item.choice1}
                   >{item.choice1}</Text>
                </View>     
          </View> 
          </View>
        </TouchableOpacity> 
          <TouchableOpacity onPress={this.vote1}>
            <View style={styles.row}>
            <View style={styles.Icon}>
                <MaterialCommunityIcons name='arrow-right-bold-circle-outline' size={25}  color='#333'/>
              </View>
              <Text style={styles.Textblack}>vote</Text>
            </View>
            </TouchableOpacity>
       

            <View style={styles.TextCount}>
            <Text style={{marginLeft:15,fontSize:18,color:"#fff"}}>{item.vote2}</Text>
              </View>
    <TouchableOpacity onPress={()=>{
         this.state.vot2=item.choice2
      console.log("vot",(this.state.vot2)) 
     }}>        
           <View style={styles.Row2}>   
           <View style={styles.searchView}>
                <View style={styles.Row}>
                <MaterialCommunityIcons  size={25}  color='#333'/>
                <Text style={{marginLeft:15,fontSize:18,}} value={item.choice2}
                   >{item.choice2}</Text>
                </View>     
          </View> 
          </View>
        </TouchableOpacity> 
          <TouchableOpacity onPress={this.vote2}>
            <View style={styles.row}>
            <View style={styles.Icon}>
                <MaterialCommunityIcons name='arrow-right-bold-circle-outline' size={25}  color='#333'/>
              </View>
              <Text style={styles.Textblack}>vote2</Text>
            </View>
            </TouchableOpacity>

               
       
        <View style={styles.BottomDivider}/> 
      </View> 
    
  )}
  />
      </ImageBackground> 
          </ScrollView>
      
      );
    }
    constructor(props){
    super(props)
    this.state={question:'',choice1:'', choice2:'',vot:[]}

     

  }
 
   
  


  vote=()=>{
        
    
    fetch('http://192.168.1.8:3000/AddPoll',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
        body:JSON.stringify({
          question:this.state.question,
          choice1:this.state.choice1,
              choice2:this.state.choice2,

        })
    })
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({res}, ()=>this.setState({showAlert: true}))

       this.viewQuestion()
    })
    .done()
  }
}

  



  const styles = StyleSheet.create({
  backgriundImage: {
    width: "100%",
    height: "100%",
  },
  Container:{
    flex: 1,  
  },
  Header:{
    height: 50,
    flexDirection: "row",
    alignItems:"center",
   justifyContent:'space-between',
   marginTop: 30,
   padding: 11,
  },
  Profile:{
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    marginHorizontal: 5,
    marginVertical:5,
   },
  Row:{
    alignItems:"center",
    flexDirection: "row",
  },
  column:{
    alignItems:"center",
    flexDirection: "column",
    marginHorizontal:10,
  },
  User:{
    fontSize: 12,
    fontWeight: 'bold',
    color: "#05A7A4",
  },
 
  Post:{
    fontSize: 12,
    color: "#fff",
    lineHeight:16,
    padding: 11,
  },
  Footer:{
    padding: 11,
  },
  FooterCount:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },

 
  FooterMenu2:{
    flexDirection: "row",
   padding:15,
   paddingHorizontal:140,
  
  },
 
  Icon:{
    marginRight: 6,
  },
  Text:{
    fontSize: 14,
    color: "#fff",
  },
  ppText:{
    fontSize: 14,
    color: "#fff",
    fontWeight:'bold',
  },
  Textblack:{
    fontSize: 15,
    color: "#333",
    marginLeft:-5,
  },
 BottomDivider:{
    width: '100%',
    height:10,
    backgroundColor: "#fff",
 },

Divider:{
  width: "100%",
  height: 0.5,
  backgroundColor: "#f0f0f0",
  marginTop:15,
  },
  Row2:{
  flexDirection: "row",
  backgroundColor: "#ffffff",
  width: "100%",
  alignItems: "center",

  },
 
  searchView:{
    
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: '#333', 
    borderWidth: 3, 
    marginLeft:20,
    marginBottom:20,
    marginTop:20,
    width: '80%',
  },

  searchtext:{
    paddingHorizontal: 20, 
    paddingVertical:7,
    fontSize: 18, 
    color: "#000"
  },
  votetext:{
    paddingHorizontal: 5, 
    paddingVertical:7,
    fontSize: 15, 
    color: "#000"
  },
userlist:{
width:"30%",
fontSize:10,
color:"#fff"
},

checkboxContainer: {
  flexDirection: "row",
  marginBottom: 20,
},
checkbox: {
  alignSelf: "center",
},
label: {
  margin: 8,
},
  });



