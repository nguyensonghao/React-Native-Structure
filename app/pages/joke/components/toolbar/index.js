import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';
import ButtonIcon from '../../../../components/buttonIcon';

export default class Toolbar extends Component {
    render() {
    	const  { height, width } = Dimensions.get('window');

        return (
            <View style={[Style.container, {width: width}]}>
	            <TouchableOpacity style={Style.buttonPrevious} onPress={() => this.props.previous()}>
	                <Icon name="md-arrow-round-back" size={24} color="black"/>
	            </TouchableOpacity>
	            <TouchableOpacity style={Style.button} onPress={() => this.props.love()}>
	                <Icon name="md-heart" size={24} color="black"/>
	            </TouchableOpacity>
	            <TouchableOpacity style={Style.button} onPress={() => this.props.share()}>
	                <Icon name="md-share" size={24} color="black"/>
	            </TouchableOpacity>
	            <TouchableOpacity style={Style.buttonNext} onPress={() => this.props.next()}>
	                <Icon name="md-arrow-round-forward" size={24} color="black"/>
	            </TouchableOpacity>
            </View>
        );
    }
}
