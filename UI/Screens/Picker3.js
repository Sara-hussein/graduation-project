import React, { Component } from 'react';
import { View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class Picker3 extends Component {
    state = {
        grade: 'java',
    };

  render() {
    return (
        <View>
            <Picker
                selectedValue={
                    this.state.grade
                }
                style={
                    {height: 50, width: 118,}
                }
                onValueChange = {
                    (itemValue, itemIndex) =>
                    this.setState({grade: itemValue})
                }>
                <Picker.Item label="CS" value="a" />
                <Picker.Item label="IS" value="b" />
                <Picker.Item label="IT" value="c" />
                <Picker.Item label="SW" value="d" />
                <Picker.Item label="Medical" value="d" />
               
              </Picker> 
        </View>
    );
  }
}