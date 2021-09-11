import React, { Component } from 'react';
import { View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class picker extends Component {
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
                <Picker.Item label="Male" value="a" />
                <Picker.Item label="Female" value="b" />
               
              </Picker> 
        </View>
    );
  }
}