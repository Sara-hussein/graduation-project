import React, { Component } from 'react';
import { View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class picker2 extends Component {
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
                    {height: 50, width: 117,}
                }
                onValueChange = {
                    (itemValue, itemIndex) =>
                    this.setState({grade: itemValue})
                }>
                <Picker.Item label="One" value="a" />
                <Picker.Item label="Two" value="b" />
                <Picker.Item label="Three" value="c" />
                <Picker.Item label="Four" value="d" />
               
              </Picker> 
        </View>
    );
  }
}