
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Style from './style';

export default class Home extends Component {
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.rows}>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/dog.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/dog.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/dog.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăn</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.rows}>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/dog.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/dog.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/dog.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}