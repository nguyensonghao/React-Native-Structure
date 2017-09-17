import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

import Style from './style';

class Actions extends Component {
    render() {
        return (
            <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => {Actions.addArticle()}}/>                
        );
    }
}

export default Actions;
