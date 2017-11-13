import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from'./style';

export default class ButtonSend extends Component {
    render() {
        return (
            <TouchableOpacity style={Style.button}>
            	<Icon name="md-send" size={18} color="black"/>
            </TouchableOpacity>
    	)
  	}
}
