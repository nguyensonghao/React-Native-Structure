import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';
import UtilService from '../../../../services/util';

class Item extends Component {
    render() {
        const { forum } = this.props;
        const time = UtilService.convertNiceDate(new Date(forum.time));

        return (
            <View style={Style.container}>
                <View style={Style.toolbar}>
                    <Icon name="ios-heart-outline" size={20} style={Style.toolbarIcon}/>
                    <Icon name="md-share" size={20} style={Style.toolbarIcon}/>
                </View>
                <View style={Style.info}>
                    <Image style={Style.avatar} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
                    <View>
                        <Text style={Style.name}>{forum.user.name}</Text>
                        <Text style={Style.time}>{time}</Text>
                    </View> 
                </View>
                <Text style={Style.content}>{forum.title}</Text>
                <View style={Style.moreInfo}>
                    <Text style={Style.moreInfoItem}>{forum.comment} trả lời</Text>
                    <Text style={Style.moreInfoItem}>{forum.like} thích</Text>
                </View>
            </View>
        );
    }
}

export default Item;
