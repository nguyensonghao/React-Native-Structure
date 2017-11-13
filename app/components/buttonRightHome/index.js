import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ButtonIcon from '../buttonIcon';
import Style from './style';

class ButtonRightHome extends Component {
    render() {
        return (
            <View style={Style.container}>
                <ButtonIcon icon="ios-camera" size={32} color="black" click={() => alert("Show Menu")}/>
                <ButtonIcon icon="ios-search" size={28} color="black" click={() => Actions.gallery()}/>
                <ButtonIcon icon="ios-notifications" size={28} color="black" click={() => alert("Show Menu")}/>
            </View>
        );
    }
}

export default ButtonRightHome;
