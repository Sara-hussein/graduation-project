import React from 'react';
import { StyleSheet, View, Text ,ScrollView, ImageBackground, Image} from 'react-native';
import {DrawerNavigatorItems} from "react-navigation-drawer";

export default function Card(props)
{
    return(
        
        <ScrollView>
        <ImageBackground source={require("./1.jpg")} style={styles.backgriundImage}>
        <Image source={require("./3.jpg")} style={styles.Profile}/>
        <Text style={styles.name}>
          Nourhan
        </Text>
        </ImageBackground>

        <View styles={styles.Container}>
            <DrawerNavigatorItems {...props}/>

        </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    backgriundImage: {
        marginVertical:0,
        width: "100%",
        height: 140,
      },
    Container:{
       flex: 1 ,
      },
      Profile:{
       width: 80,
       height: 80,
       borderRadius: 40,
       borderWidth: 3,
       borderColor: "#fff",
       marginHorizontal: 8,
       marginVertical:5,
      },
      name:{
        color: "#fff",
        fontSize: 20,
        marginVertical: 8,
        marginHorizontal: 10,
      }
  });

      
  