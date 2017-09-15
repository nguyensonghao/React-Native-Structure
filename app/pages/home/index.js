
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Style from './style';
import Slider from './components/slider';
import Profile from './components/profile';
import Loading from '../../components/loading';

export default class Home extends Component {
    constructor(props) {
        super(props);        
    }
    
    render() {
        return (
            <View style={Style.container}>
                <Profile/>
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
                            source={require('../../resources/images/cat.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/duck.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăn</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.rows}>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/chicken.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/cow.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <Image
                            style={Style.imgIcon}
                            source={require('../../resources/images/pig.png')}
                        />
                        <Text style={Style.textIcon}>Bài Đăng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}