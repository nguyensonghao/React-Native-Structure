import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import FBSDK from 'react-native-fbsdk';
const { ShareDialog } = FBSDK;

import Style from './style';

class Item extends Component {
    render() {
        return (
            <TouchableOpacity style={Style.item} onPress={() => Actions.detailJoke({id: this.props.joke.id})}>
                <Text style={Style.title}>{this.props.joke.title}</Text>
            </TouchableOpacity >
        );
    }
}

export default Item;
