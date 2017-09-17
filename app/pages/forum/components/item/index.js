import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

class Item extends Component {
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.toolbar}>
                    <Icon name="ios-heart-outline" size={20} style={Style.toolbarIcon}/>
                    <Icon name="md-share" size={20} style={Style.toolbarIcon}/>
                </View>
                <View style={Style.info}>
                    <Image style={Style.avatar} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
                    <View>
                        <Text style={Style.name}>Nguyen Song Hao</Text>
                        <Text style={Style.time}>10h ago</Text>
                    </View> 
                </View>
                <Text style={Style.content}>Cộng hòa xã hội chủ nghĩa Việt Nam Cộng hòa xã hội chủ nghĩa Việt Nam Cộng hòa xã hội chủ nghĩa Việt Nam Cộng hòa xã hội chủ nghĩa Việt Nam Cộng hòa xã hội chủ nghĩa Việt Nam</Text>
                <View style={Style.moreInfo}>
                    <Text style={Style.moreInfoItem}>10 trả lời</Text>
                    <Text style={Style.moreInfoItem}>16 likes</Text>
                    <Text style={Style.moreInfoItem}>10 trả lời</Text>
                </View>
            </View>
        );
    }
}

export default Item;
