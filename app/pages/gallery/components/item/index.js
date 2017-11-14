import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';

import Style from './style';

export default class Item extends Component {
    render() {
        const { image } = this.props;
        const  { height, width } = Dimensions.get('window');
        const size = width / 2 - 12;

        if (image.length == 2) {
            return (
                <View style={Style.container}>
                    <Image style={{width: size, height: size, margin: 6}} source={{uri: image[0]}}/>
                    <Image style={{width: size, height: size, margin: 6}} source={{uri: image[1]}}/>
                </View>
            );
        } else {
            return (
                <View style={Style.container}>
                    <Image style={{width: size, height: size, margin: 6}} source={{uri: image[0]}}/>
                </View>
            );
        }
    }
}