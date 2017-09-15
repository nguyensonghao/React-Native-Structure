import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ButtonIcon from '../buttonIcon';
import Style from './style';

class ButtonRightHome extends Component {
    render() {
        return (
            <View style={Style.container}>
                <ButtonIcon icon="ios-camera-outline" size={28} color="#616161" click={() => alert("Show Menu")}/>
                <ButtonIcon icon="ios-search-outline" size={28} color="#616161" click={() => alert("Show Menu")}/>
                <ButtonIcon icon="ios-notifications-outline" size={28} color="#616161" click={() => alert("Show Menu")}/>
            </View>
        );
    }
}

export default ButtonRightHome;
