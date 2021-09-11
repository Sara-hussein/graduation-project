import {  MaterialCommunityIcons, } from '@expo/vector-icons';
import { MaterialIcons} from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Linking,FlatList, Image, StyleSheet, Dimensions, ImageBackground, TextInput, _ScrollView } from "react-native";
import React from 'react';
import { Video } from 'expo-av';
import Lightbox from 'react-native-lightbox';

import * as ImagePicker from "expo-image-picker";
export default class PostScreen extends React.Component {

  state = {
    desc: '',
    showAlert: false,
    GPA: 2,
    data:[],
    description:[],
    URL:'',
    image: null,
    uploading: false,
  };
  _maybeRenderUploadingIndicator = () => {
    if (this.state.uploading) {
      return <ActivityIndicator animating size="large" />;
    }
  };


  _askPermission = async (failureMessage) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "denied") {
      alert(failureMessage);
    }
  };

  _pickImage = async () => {
    await this._askPermission(
      "We need the camera-roll permission to read pictures from your phone..."
    );

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: 'Videos',

      aspect: [4, 3],
    });

    this._handleImagePicked(pickerResult);
  };




  _handleImagePicked = async (pickerResult) => {
    let uploadResponse;

    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: pickerResult.uri });

      }
    } catch (e) {

      console.log({ e });
    } finally {
      this.setState({ uploading: false });
      this.viewvideo()

    }
  };
  componentDidMount() {
    this.viewdesc();
    this.viewvideo()

  }
  adddesc = () => {


    fetch('http://192.168.1.8:3000/desc', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        desc: this.state.desc,
        URL: this.state.URL,
      })
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({res}, ()=>this.setState({showAlert: true}))
        this.viewdesc();
      })
      .done()
  }
viewdesc=()=>{
  fetch('http://192.168.1.8:3000/viewdesc', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).
      then(results => {
        this.setState({ description: results.description })
        console.log(results.description)
      })
}
viewvideo=()=>{
  fetch('http://192.168.1.8:3000/viewvideo', {
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



  render() {
    return (

      <ScrollView>
               <ImageBackground source={require("./Images/post.jpg")}  style={styles.backgriundImage} >

          <View style={styles.Row2}>
          <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message={`You're post added`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#009F7D"
          onConfirmPressed={() => {
           this.setState({showAlert: false})
          }}
        />
            <Image source={require('./Images/p1.jpg')} style={styles.Profile} />
            <View style={styles.searchView}>
            <TextInput placeholder="write your GP idea" multiline style={styles.searchtext}
                onChangeText={(desc) => this.setState({ desc })}
                value={this.state.desc}
              />
        <TextInput placeholder="put your gp link" multiline style={styles.searchtext}
                onChangeText={(URL) => this.setState({ URL })}
                value={this.state.URL}
              />
              {/* <Video
                source={{ uri: this.state.image }}
                shouldPlay
                resizeMode="cover"
                style={{ width: 200, height: 80 }}
              />
  */}
            </View>
            <View style={styles.column}>
              <View style={styles.Icon}>
                <MaterialCommunityIcons name='postage-stamp' size={35} color='#333' onPress={this._pickImage} />
                <MaterialIcons name='post-add' size={35} color='#333' onPress={this.adddesc} />
              </View>
           
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>


            </TouchableOpacity>
          </View>
        

          <View style={styles.Divider} />


          <View style={styles.Container}>
            <View style={styles.Post}>

              <FlatList

                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}

                renderItem={
                  ({ item }) => (

                    <View styles={styles.item}>
                      <View style={styles.Header}>
                        <View style={styles.Row}>
                          <Image source={require('./Images/T.png')} style={styles.Profile} />

                        </View>

                      </View>
                      <View style={{ paddingLeft: 10 }}>
                        <View style={styles.User}>
                          <Text style={styles.ppText}>Nourhan Magdy</Text>
                        </View>

                      </View>
                    
                     
                      <Lightbox>
                      <Video
                        source={{ uri: item }}
                        shouldPlay
                        resizeMode="cover"
                        style={{ width: 500, height: 500 }}
                      />

</Lightbox>


                    </View>
                  )}


              />
                <FlatList

keyExtractor={(item, index) => index.toString()}
data={this.state.description}

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
     
      <View style={{flexDirection:'row',padding:5,marginBottom:5,backgroundColor:'lightgray',borderRadius:12}}>
      <Text >{item.desc}</Text>
</View>
  
<View style={{flexDirection:'row',padding:5,marginBottom:5,backgroundColor:'lightgray',borderRadius:12}}>
<Text onPress={() => Linking.openURL(item.URL)} style={styles.Link}>{item.URL}</Text>
</View>


    </View>
  )}


/>
          
            </View>
            <View style={styles.Footer}>
              <View style={styles.FooterCount}>
                <View style={styles.Row}>


                </View>
              </View>
            </View>

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
  Container: {
    flex: 1,
  },
  Header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 11,
  },
  Profile: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  Row: {
    alignItems: "center",
    flexDirection: "row",
  },
  column: {
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: 10,
  },
  User: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#05A7A4",
  },

  Post: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 16,
    padding: 11,
  },
  Footer: {
    padding: 11,
  },
  FooterCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
  },


  FooterMenu2: {
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 140,

  },

  Icon: {
    marginRight: 6,
  },
  Text: {
    fontSize: 14,
    color: "#fff",
  },
  ppText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: 'bold',
  },
  Textblack: {
    fontSize: 14,
    color: "#fff",
    marginLeft: -5,
  },
  BottomDivider: {
    width: '100%',
    height: 10,
    backgroundColor: "#fff",
  },

  Divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#f0f0f0",
    marginTop: 15,
  },
  Row2: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    width: "100%",
    alignItems: "center",

  },

  searchView: {

    backgroundColor: "#FFF",
    borderRadius: 40,
    borderColor: '#000',
    borderWidth: 3,
    width: '70%',
  },

  searchtext: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    fontSize: 15,
    color: "#000"
  },


});


async function uploadImageAsync(uri) {
  let apiUrl = "http://192.168.1.8:3000/video"
  let uriArray = uri.split(".");
  let fileType = uriArray[uriArray.length - 1];

  let formData = new FormData();

  formData.append("video", {

    uri,
    name: `video.${fileType}`,
    type: `video/${fileType}`,
  });
  // formData.append('desc', desc);

  console.log(uri)

  let options = {
    method: "POST",
    body: formData,
    mode: 'cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  return fetch(apiUrl, options);
}

