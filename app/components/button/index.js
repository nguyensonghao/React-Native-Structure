import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.click()}>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
