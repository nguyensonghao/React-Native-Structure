
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HomeStyle from './style';

export default class Home extends Component {
    render() {
        return (
            <View style={HomeStyle.container}>
                <View style={HomeStyle.boxItem}>
                    <Text>Bài đăng</Text>
                </View>
                <View style={HomeStyle.boxItem}>
                    <Text>Bài đăng</Text>
                </View>
                <View style={HomeStyle.boxItem}>
                    <Text>Bài đăng</Text>
                </View>
                <View style={HomeStyle.boxItem}>
                    <Text>Bài đăng</Text>
                </View>
            </View>
        );
    }
}