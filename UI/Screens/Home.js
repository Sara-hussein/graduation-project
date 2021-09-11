import React from "react";
import {MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput, StyleSheet } from "react-native";
import Lightbox from 'react-native-lightbox';
import {YellowBox} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
      YellowBox.ignoreWarnings(['Warning: ...']);
      console.disableYellowBox = true;
      return (
        <ScrollView>
        <ImageBackground
          source={require("./Images/Home.jpg")}
          style={styles.backgriundImage}
        >
        
        

        <View style={styles.searchView}>
              
              <MaterialIcons name="search" color="#333" size={32} />
              <TextInput placeholder="Search" style={styles.searchtext} />

            </View>
        <View style={styles.header}>
      
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mapone} >

            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Gp")}
                style={{  alignItems: "center", justifyContent: "center",  height: 66, width: 66, borderRadius: 15, backgroundColor:  "#AF2C77",marginHorizontal:10 }} >
                 <MaterialIcons name="school" color="white" size={32} />
              </TouchableOpacity>
              <Text style={{color: "#fff",fontSize: 12, marginVertical: 8, marginHorizontal: 35,}}>
              GP
               
              </Text>
            
              </View>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Post")}
                style={{  alignItems: "center", justifyContent: "center",  height: 66, width: 66, borderRadius: 15, backgroundColor: "#2C79AF",marginHorizontal:10 }} >
                 <MaterialIcons name="post-add" color="white" size={32} />
              </TouchableOpacity>
              <Text style={{color: "#fff",fontSize: 12, marginVertical: 8, marginHorizontal: 30,}}>
               Posts
              </Text>
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Courses")}
                style={{  alignItems: "center", justifyContent: "center",  height: 66, width: 66, borderRadius: 15, backgroundColor: "#9D60B2",marginHorizontal:10 }} >
                 <MaterialIcons name="grade" color="white" size={32} />
              </TouchableOpacity>
              <Text style={{color: "#fff",fontSize: 12, marginVertical: 8, marginHorizontal: 23,}}>
              Courses
              </Text>
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Department")}
                style={{  alignItems: "center", justifyContent: "center",  height: 66, width: 66, borderRadius: 15, backgroundColor: "#fc5b83",marginHorizontal:10 }} >
                 <Text style={{fontSize:32,color:"#fff",fontWeight:'bold',fontStyle:'italic'}}>D</Text>
              </TouchableOpacity>
              <Text style={{color: "#fff",fontSize: 12, marginVertical: 8, marginHorizontal: 15,}}>
               Department
              </Text>
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Questions")}
                style={{  alignItems: "center", justifyContent: "center",  height: 66, width: 66, borderRadius: 15, backgroundColor:  "#AF2C77",marginHorizontal:10 }} >
                 <MaterialIcons name="question-answer" color="white" size={32} />
              </TouchableOpacity>
              <Text style={{color: "#fff",fontSize: 12, marginVertical: 8, marginHorizontal: 16,}}>
               Questions
               
              </Text>
              </View>
              <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Vote")}
                style={{  alignItems: "center", justifyContent: "center",  height: 66, width: 66, borderRadius: 15, backgroundColor: "#2C79AF",marginHorizontal:10 }} >
                 <MaterialIcons name="how-to-vote" color="white" size={32} />
              </TouchableOpacity>
              <Text style={{color: "#fff",fontSize: 12, marginVertical: 8, marginHorizontal: 25,}}>
               Vote
              </Text>
              </View>
              
            </ScrollView>
            </View>
            
            <View style={styles.header}>
            <View style={styles.titlestyle}>
            <Text
              style={styles.titletextstyle}
            >
              Engage items
            </Text>
            </View>
            </View>

            <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("CalculateGPA")}>
                <View style={styles.buttontwo} >
                  <View style={styles.buttontwostyle} >
                  <MaterialIcons name="calculate" color="white" size={22} />
                  </View>
                  <View style={styles.buttontwocontainer} >
                     <View style={styles.buttontwotextview} >
                       <Text style={styles.buttontwotextstyle} >
                            Calculate your current GPA 
                       </Text>

                     </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate("CalcTotalHours")}>
                <View style={styles.buttontwo} >
                  <View style={styles.buttontwostyle} >
                  <MaterialIcons name="timer" color="white" size={22} />
                  </View>
                  <View style={styles.buttontwocontainer} >
                     <View style={styles.buttontwotextview} >
                       <Text style={styles.buttontwotextstyle} >
                            Calculate total hours 
                       </Text>

                     </View>
                  </View>
                </View>
              </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Expert")}>
                <View style={styles.buttontwo} >
                  <View style={styles.buttontwostyle} >
                  <MaterialIcons name="segment" color="white" size={22} />
                  </View>
                  <View style={styles.buttontwocontainer} >
                     <View style={styles.buttontwotextview} >
                       <Text style={styles.buttontwotextstyle} >
                            Your suitable department 
                       </Text>
                     </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate("SummerTime")}>
                <View style={styles.buttontwo} >
                  <View style={styles.buttontwostyle} >
                  <MaterialIcons name="schedule" color="white" size={22} />
                  </View>
                  <View style={styles.buttontwocontainer} >
                     <View style={styles.buttontwotextview} >
                       <Text style={styles.buttontwotextstyle} >
                            Your Summer-time 
                       </Text>
                     </View>
                  </View>
                </View>
              </TouchableOpacity>
        </View>
       
      
        

              <View style={styles.header}>
            <View style={styles.titlestyle}>
            <Text
              style={styles.titletextstyle}
            >
              Explore 
            </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mapone} >

              <View
                style={{
                  backgroundColor: "#05A7A4",
                  height: 180,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 10,
                  marginVertical:10,
                  alignItems:'center'
                }}
              >
            <View style={{ width: 180,  height: 130 }}>
            <Lightbox activeProps={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                
                <Image
                  source={require("./Images/2.jpg")}
                  style={{width: '100%', height: '100%', borderRadius: 10,}}
                  resizeMode='cover'
                  resizeMethod='resize'
                />
            </Lightbox>
            </View>

                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >

                
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        
                        fontSize: 15,
                        color: "#fff",
                      }}
                    >
                      Helwan university's map 
                      
                      
                    </Text>
                  </View>

                 
               
                
              </View>
              </View>
              
              <View
                style={{
                  backgroundColor: "#05A7A4",
                  height: 180,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 5,
                  marginVertical:10,
                  alignItems:'center'
                  
                }}
                >
            <View style={{ width: 180,  height: 130 }}>
            <Lightbox activeProps={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                
                <Image
                  source={require("./Images/3.jpg")}
                  style={{width: '100%', height: '100%', borderRadius: 10,}}
                  resizeMode='cover'
                  resizeMethod='resize'
                />
            </Lightbox>
            </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                      
                        fontSize: 15,
                        color: "#fff",
                      }}
                    >
                      Fcai-Hu Software department's map
                      
                    </Text>
                  </View>
                
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "#05A7A4",
                  height: 180,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 5,
                  marginVertical:10,
                  alignItems:'center'
                  
                }}
                >
            <View style={{ width: 180,  height: 130 }}>
            <Lightbox activeProps={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                
                <Image
                  source={require("./Images/19.jpg")}
                  style={{width: '100%', height: '100%', borderRadius: 10,}}
                  resizeMode='cover'
                  resizeMethod='resize'
                />
            </Lightbox>
            </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                      
                        fontSize: 15,
                        color: "#fff",
                      }}
                    >
                      Fcai-Hu General department's map
                      
                    </Text>
                  </View>
                
                </View>
              </View>
  

            </ScrollView>
          </View>
          </ImageBackground>
          </ScrollView>
        
      );
    }
  }


  const styles = StyleSheet.create({

    backgriundImage: {
        width: "100%",
        height: "100%",
      },
    ////////////////////////////
  
    ////////////////////////////
    header:{
      paddingHorizontal: 40, 
      //marginTop: 15
    },
    ////////////////////////////
     headerText:
     {
      fontSize: 40,
      color: "#522289",
      
     },
    ////////////////////////////
    
    ////////////////////////////
    searchView:{
      flexDirection: "row",
      backgroundColor: "#DEDEDE",
      borderRadius: 40,
      borderColor: '#A1DED2', 
      borderWidth: 3, 
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 30,
      marginRight:0,
      marginLeft:10,
      width: '95%',
    },
    ////////////////////////////
    searchimage:{
      height: 14, 
      width: 14
    },
    ////////////////////////////
    searchtext:{
      paddingHorizontal: 20, 
      fontSize: 15, 
      color: "#ccccef"
    },
    ////////////////////////////
    buttonScrollView:{
      marginRight: -100, 
      marginTop: 30
    },
    ////////////////////////////
    name:{
      color: "#333",
      fontSize: 12,
      marginVertical: 8,
      marginHorizontal: 10,
    },
    ////////////////////////////
    /*buttontwo:
    {
      backgroundColor: "#FEFEFE", 
      borderRadius: 15, 
      padding: 5, 
      flexDirection:'row',  
      marginVertical:10,
      marginHorizontal:10,
      marginRight:20,
      width: '80%',
    },
    ////////////////////////////
    buttontwostyle: {  
      alignItems: "center", 
      justifyContent: "center",  
      height: 66, width: 66, 
      borderRadius: 10, 
      backgroundColor: "#bb32fe",
      marginHorizontal:2 
    },
    ////////////////////////////
    buttontwocontainer:{ 
      flexDirection: "row",  
      width: 150, 
      alignItems: "center"
    
    },
    ///////////////////////////
    buttontwotextview:
    { 
      paddingHorizontal: 5, 
      paddingVertical: 5, 
      
    },
    //////////////////////////
    buttontwotextstyle:{
    fontSize: 11, 
      color: "#a2a2db",
    },*/
    /////////////////////////
    mapone:{
      marginHorizontal: -35, 
      marginTop: 30, 
    },
    ////////////////////////////
    titlestyle:
    {
      flexDirection: 'column',
      borderRadius: 10,
      width: '100%', 
      padding: 7 ,
      alignItems:"flex-start",
      justifyContent:"center",
      marginLeft:-20,
      marginBottom:5,
    },
    ////////////////////
    titletextstyle:
    {
      fontSize: 30,
      color:'#ffffff',
      //textDecorationLine: 'underline',
      fontWeight: 'bold',
      textDecorationLine: 'none',
      fontStyle: 'normal',
      textShadowOffset:{width: 3, height: 3},
      textShadowRadius:20,
      
    },
    buttontwo:
    {
      //backgroundColor: "#D1F2EB", 
      backgroundColor: "#DEDEDE", 
      padding: 5, 
      flexDirection:'row',  
      marginVertical:10,
      marginHorizontal: 15,
      borderRadius: 5, 
      
      width: 170,
      height:90,
     /* 
     //borderColor: '#11927F', 
      //borderWidth: 2, 
     shadowOffset: {width: 1, height: 1},
      shadowColor: '#11927F',
      shadowOpacity: 1,
      shadowRadius: 10,*/
    },
    ////////////////////////////
    buttontwostyle: {  
      alignItems: "center", 
      justifyContent: "center", 
      marginTop:15,
      margin:10,
      height: 50, 
      width: 50, 
      borderRadius: 50, 
      backgroundColor:"#39A48F",
      
    },
    ////////////////////////////
    buttontwocontainer:{ 
      flexDirection: "row",  
      width: 150, 
      alignItems: "center",
      
    
    },
    ///////////////////////////
    buttontwotext:
    {
        fontSize:10

    },
    ///////////////////////////
    buttontwotextview:
    { 
      paddingHorizontal: 5, 
      paddingVertical: 5, 
      
    },
    //////////////////////////
    buttontwotextstyle:{
      fontWeight: 'bold',
      fontSize: 11, 
      color: "#333",
      width:'80%',
    },
    /////////////////////////
    buttontwotexttwostyle:{
        fontWeight: 'bold',
        fontSize: 10, 
        color: "#8B9293",
        marginTop:10,
        marginLeft:15,
        width:'70%',
    },
    row:
    {
      flexDirection:'row',
      margin:10,
      justifyContent:'center'
    },

    
  });




































/*
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';


const CONTENT = [
  {
    title: 'First Question',
    content: 'NOURHAN',
  },
  {
    title: 'Second Question',
    content: 'DALIA',
  },
  {
    title: 'Third Question',
    content: 'SARA',
  },
  {
    title: 'Fourth Question',
    content: 'JESSICA',
  },
  {
    title: 'Fifth Question',
    content: 'MIRA',
  },
];



export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View style={styles.inputThree}>
        <Text style={styles.headerText}>{section.title}</Text>
        
        </View>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
        
        <Image source={require('./11.jpg')} style={styles.backgriundImage}>
          </Image>
          
       
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    
  },
 
  backgriundImage: {
    flex: 1,
   
    marginRight:0,
    marginLeft:10,
    resizeMode: 'cover',
    width: '95%',
    justifyContent: 'center',
    borderRadius:5,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    color:"#15908E",
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
  fontWeight: 'bold',
  fontSize: 20,
  color:'#11927F',
  padding:10,
  
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
 

  inputThree: {
    flexDirection: 'column',
    borderRadius: 10,
    width: '100%', 
   
    padding: 7 ,
    alignItems:"flex-start",
    justifyContent:"flex-start",
    marginTop:10,
    marginBottom:5,
    backgroundColor:'#D1F2EB',
    flexDirection:'row',
   
  },
  });
  /*
   <TouchableOpacity onPress={this.toggleExpanded}>
          <View style={styles.inputThree}>
            
              <Text style={styles.headerText}>Single Collapsible</Text>

            
            </View>
          </TouchableOpacity>
  */

