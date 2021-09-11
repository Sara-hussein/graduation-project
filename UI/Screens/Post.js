import {Entypo, MaterialCommunityIcons, } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, StyleSheet,ImageBackground,TextInput ,_ScrollView ,FlatList} from "react-native";
import React from 'react';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import AwesomeAlert from 'react-native-awesome-alerts';

import CollapsibleList from "react-native-collapsible-list";



const CONTENT = [
  {
    title: 'comment',
  },
];

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];
export default class PostScreen extends React.Component {
    state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
    posts:[],
    showAlert: false,
    content:"",
    commentContent:""
   // comments:[]
  };

componentDidMount() {
    this.ViewAllPosts();
}


_updateSections = (activeSections) => {
  this.setState({ activeSections });
};
ViewAllPosts=()=> {
  fetch('http://192.168.1.8:3000/ViewAllPosts', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).
  then(results => {
    this.setState({ posts: results.posts });
    console.log(this.state.posts);

  })
}
 addpost = async() =>{
  console.log("tests :( ");
  console.log(JSON.stringify({
    contnet:this.state.contnet
  }));
  await fetch('http://192.168.1.8:3000/AddPost',{
    method:'POST',
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
      body:JSON.stringify({
        content:this.state.content,

      })
  })
  .then((response)=>response.json())
  

  .then((res)=>{
    console.log(res);
    if(res.success ===true){
      this.setState({res}, ()=>this.setState({showAlert: true}))

    this.ViewAllPosts();
     
    }else{
      alert(res.message)
    }
  })
  .done()

 }
 // take post id 
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });

  // get all comment with post id 


  };
  _keyExtractor = (item, index) => item._id.toString();

  createComment =(postId)=>{
   
    this.addComment(postId,this.state.commentContent);
  } 
  

  addComment = async (postId,content) =>{
        console.log(postId,content);
    await fetch('http://192.168.1.8:3000/comment/add',{
      method:'POST',
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
        body:JSON.stringify({
          postId:postId,
          content:content
        })
    })
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({commentContent:""});
     console.log("commented");
     this.ViewAllPosts();
    })
    .done()

  }
  getCommentWithPost= async(id)=>{
    await fetch('http://192.168.1.8:3000/comment/post',{
      method:'POST',
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
        body:JSON.stringify({
          postId:id,
  
        })
    })
    .then((response)=>response.json())
    .then((res)=>{
      console.log(res);
      this.setState({comments:res.comments});
    })
    .done()

  }
  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View duration={40} style={[styles.header2, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <View style={styles.FooterMenu2}>
          <View style={styles.Icon}>
                  <MaterialCommunityIcons name='comment-outline'	size={20}	color='#fff'/>
          </View>
        <Text style={styles.headerText}>Comments</Text>
        
        </View>
    
      </Animatable.View>
    );
  };

  render() {

      return (
        
        <ScrollView>
         <ImageBackground source={require("./Images/post.jpg")}  style={styles.backgriundImage} >
            <View style={styles.Row2}>
            <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message={`Your post is added`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           this.setState({showAlert: false})
          }}
        />
              <Image source={require('./Images/p1.jpg')} style={styles.Profile}/>
              <View style={styles.searchView}>
                <TextInput placeholder="Write your question" multiline  style={styles.searchtext}
                onChangeText={(content)=>this.setState({content:content})}
                value={this.state.content}/>
              </View>
              <TouchableOpacity onPress={() => this.addpost()}>
                <View style={styles.column}>
                <View style={styles.Icon}>
                    <MaterialCommunityIcons	name='postage-stamp'	size={22}	color='#333'/>
                  </View>
                  <Text style={styles.Textblack}>Post</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.Divider}/>
            <View style={styles.Container}>
            <FlatList
            data={this.state.posts}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) =>
        
            <View>
                <View style={styles.Header}>
                  <View style={styles.Row}>
                    <Image source={require('./Images/4.jpg')} style={styles.Profile}/>
                      <View style={{ paddingLeft: 10 }}>
                      <View style={styles.User}>
                      <Text style={styles.ppText}>Nourhan Magdy</Text></View>
                      </View>
                  </View>
                </View>

                <View style={styles.Post}>
                    <Text style={styles.commenttext1}>{item.content}</Text>
                </View>
            
              <View style={styles.Footer}>
              <View style={styles.FooterCount}>
                <View style={styles.Row}></View>
                </View>
                <View style={styles.Divider}/>
                {/*
                    <TouchableOpacity onPress={this.toggleExpanded}>
                    <View style={styles.FooterMenu2}>
                      <View style={styles.Icon}>
                          <MaterialCommunityIcons name='comment-outline'	size={20}	color='#fff'/>
                      </View>
                      <Text style={styles.headerText}>Comments</Text>
                    </View>
                  </TouchableOpacity>
                */}
            
                <CollapsibleList
                    numberOfVisibleItems={0}
                    wrapperStyle={styles.wrapperCollapsibleList}
                    buttonPosition="top"
                    buttonContent={
                      <TouchableOpacity>
                        <View style={styles.FooterMenu2}>
                          <View style={styles.Icon}>
                              <MaterialCommunityIcons name='comment-outline'	size={20}	color='#fff'/>
                          </View>
                          <Text style={styles.headerText} color='#fff'>Comments</Text>
                        </View>
                      </TouchableOpacity>
                    }
                  >

            

                    {  item.comments.map(comm => (
                    <View key={comm._id}> 
                
                        <View style={styles.Row}>
                          <Image source={require('./Images/p2.jpg')} style={styles.Profile}/>
                          <View style={{ paddingLeft: 10 }}>
                            <View style={styles.User}>
                              <Text style={styles.ppText}>Nourhan Magdy</Text>
                            </View>
                            <View style={styles.Row}>
                            </View>
                          </View>
                        </View>
                        <View style={styles.Post}>
                          <Text style={styles.Text}>{comm.content} </Text>
                        </View>
                    </View>
                    ))}
               
                    
              


                    <View style={styles.Separator}/>
                    <View style={styles.Row3}>
                    <View style={styles.commentView} >
                      <TextInput placeholder="write a comment" 
                      style={styles.commenttext} 
                      onChangeText={(commentContent)=>this.setState({commentContent:commentContent})}
                       value={this.state.commentContent}/> 
                         
                    </View>
                   
                    <TouchableOpacity onPress={() => this.createComment(item._id)}>
                      <View style={styles.column}>
                     
                        <View style={styles.Icon}>
                          <MaterialCommunityIcons name='comment-arrow-right-outline' size={30} color='#fff'	/>
                        </View>
                       
                      </View>
                    </TouchableOpacity>
                  </View>
                  
                </CollapsibleList>


    {/*
                <Collapsible collapsed={this.state.collapsed} align="center">
                <View style={styles.Row}>
                      <Image source={require('./Images/p2.jpg')} style={styles.Profile}/>
                      <View style={{ paddingLeft: 10 }}>
                        <View style={styles.User}>
                          <Text style={styles.ppText}>Sara Samoul</Text>
                        </View>
                        <View style={styles.Row}>
                          <View style={styles.Time}>
                            <Text style={styles.ppText}>5 min. ago</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.Post}>
                      <Text style={styles.Text}>When most people hear the term artificial intelligence, the first thing they usually think of is robots. That's because big-budget films and novels weave stories about human-like machines that wreak havoc on Earth. But nothing could be further from the truth. </Text>
                    </View>
            
             
              <View style={styles.Row}>
                <Image source={require('./Images/p3.jpg')} style={styles.Profile}/>
                <View style={{ paddingLeft: 10 }}>
                  <View style={styles.User}>
                    <Text style={styles.ppText}>Nada Fathy Abd-El-All</Text>
                  </View>
                  <View style={styles.Row}>
                    <View style={styles.Time}>
                      <Text style={styles.ppText}>3/18/2021</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.Post}>
                <Text style={styles.Text}>Artificial intelligence is based on the principle that human intelligence can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. The goals of artificial intelligence include mimicking human cognitive activity. Researchers and developers in the field are making surprisingly rapid strides in mimicking activities such as learning, reasoning, and perception, to the extent that these can be concretely defined. Some believe that innovators may soon be able to develop systems that exceed the capacity of humans to learn or reason out any subject. But others remain skeptical because all cognitive activity is laced with value judgments that are subject to human experience.</Text>
              </View>
              
                    <View style={styles.Separator}/>
                    <View style={styles.Row3}>
                    <View style={styles.commentView}>
                      <TextInput placeholder="write a comment" style={styles.commenttext} />
                    </View>
                    <View style={styles.column}>
                      <View style={styles.Icon}>
                        <MaterialCommunityIcons name='comment-arrow-right-outline' size={30} color='#fff'	/>
                      </View>
                    </View>
                  </View>
              </Collapsible>
                */}
              </View>
            
              <View style={styles.BottomDivider}/>
                
                </View>
                  }
                  />

			    </View>
          </ImageBackground>
        </ScrollView>
      
      );
    }
  }


  const styles = StyleSheet.create({

  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#fff",
    padding: 10
  },
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
  Time:{
    fontSize: 9,
    color: "#fff",
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
  TextCount:{
    fontSize: 11,
    color: "#fff",
    marginHorizontal:40,
  },
  Separator:{
    width: '100%',
    height: 1,
    backgroundColor: "#fff",
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
    fontSize: 14,
    color: "#fff",
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
  Row3:{
    flexDirection: "row",
    width: "100%",
    alignItems: "center",

  
    },
  searchView:{
    
    backgroundColor: "#fff",
    borderRadius: 40,
    borderColor: '#333', 
    borderWidth: 3, 
    width: '70%',
  },
  commentView:{
    
    backgroundColor: "#FFF",
    borderRadius: 40,
    borderColor: '#fff', 
    borderWidth: 3, 
    width: '90%',
  },
  searchtext:{
    paddingHorizontal: 20, 
    paddingVertical:7,
    fontSize: 15, 
    color: "#000"
  },
  commenttext:{
    paddingHorizontal: 20, 
    paddingVertical:7,
    fontSize: 15, 
    color: '#000'
  },
  commenttext1:{
    paddingHorizontal: 20, 
    paddingVertical:7,
    fontSize: 15, 
    color: '#fff'
  },
  header2: {
    padding: 0,
  },
  headerText: {
    fontSize: 14,
    color: "#fff",
  
  },
  
  active: {
    backgroundColor: "transparent",
  },
  inactive: {
    backgroundColor: "transparent",
  },
  /*
  content: {
    padding: 0,
    backgroundColor: '#fff',
  },

  inputwrapper:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    backgroundColor:"#2e64e515",
  },
  inputfield:{
      justifyContent:"center",
      alignItems:"center",
      fontSize:12,
      width:"90%"
  },
*/
  });



