import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';


const CONTENT = [
  {
    title: 'What are the required number of hours needed to register for graduation project?',
    content: 'From 102 hours',
  },
  {
    title: 'What are the required number of hours needed for graduation?',
    content: 'From 144 hours',
  },
  {
    title: 'Can I register for the graduation project in the second term?',
    content: 'Yes, you can. Especially when you achieve the required number of hours',
  },
  {
    title: 'What is the prerequisites courses i have to finish to enter the information system Graduation project?',
    content: 'You have to finish system analysis 1 course successfully',
  },
  {
    title: 'What is the prerequisites courses i have to finish to enter the computer science Graduation project?',
    content: 'You have to finish programming language 2 course successfully',
  },
];



export default class Questions extends Component {
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
        
        <ScrollView style={{backgroundColor:'#ffffff'}} contentContainerStyle={{ paddingTop: 30 }}>
        
        <Image source={require('./Images/Q.jpg')} style={styles.backgriundImage}>
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
    
  },
 
  backgriundImage: {
    flex: 1,
    marginRight:0,
    width: '100%',
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