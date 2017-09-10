import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Style from './style';

class ButtonIcon extends Component {
    render() {
        return (
            <TouchableOpacity style={Style.button} onPress={() => this.props.click()}>
                <Icon name={this.props.icon} size={this.props.size} color={this.props.color}/>
            </TouchableOpacity>
        );
    }
}

export default ButtonIcon;
