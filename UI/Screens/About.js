import React from 'react';
import { StyleSheet, View,  Text,  ScrollView, } from 'react-native';

export default class AboutScreen extends React.Component {
  
  state = {
    firstRate: 0,
    secondRate: 0,
   };

  
render() {
    return (
      <ScrollView style={styles.container}>
     
          <View >
            <Text  style={{paddingTop: 30, paddingLeft:10, fontSize: 16}}>
                  The Faculty of Computer Science and Information technology is primarily focused on subjects such as software, databases, and networking. In general computer science faculties tend to focus on the mathematical and theoretical foundations of computing rather than emphasizing specific technologies. The Faculty is conferring degrees in the fields of information technology and related fields where the student will gain knowledge about  software development, software testing, software engineering, web design, databases, programming, computer networking and computer system.

                  The Faculty will prepare students for jobs in the marketplace demanding systems and technology interfaces with business tasks in every function and department.

                  The overarching goal of the  Faculty  is to prepare students with broad, integrated IT knowledge including communications, computer networking, computer-based systems, database management, software development, website development, digital media and electronic publishing. Students learn how to evaluate current and emerging technologies; identify user needs; design user-friendly interfaces; apply, configure and manage technologies; and assess the impact of technologies on individuals, organizations and society.
            </Text>
          
          </View>
        
        </ScrollView>
    );}
}


const styles = StyleSheet.create({
  container: {
    flex: 5, 
    paddingLeft:5,
    paddingRight:5,
    //backgroundColor: '#89E1C4',
    
  },

});