
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
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/article.png')}
                            />
                            <Text style={Style.textIcon}>Bài Đăng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listForum()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/forum.png')}
                            />
                            <Text style={Style.textIcon}>Trao đổi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.gallery()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/photo.png')}
                            />
                            <Text style={Style.textIcon}>Ảnh đẹp</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Style.rows}>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/note.png')}
                            />
                            <Text style={Style.textIcon}>Ghi chú</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.chat()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/chat.png')}
                            />
                            <Text style={Style.textIcon}>Trò chuyện</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/settings.png')}
                            />
                            <Text style={Style.textIcon}>Cài đặt</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}