import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Style from './style';
import { APP_NAME } from '../../constants/config';

class Menu extends Component {
    render() {
        return (
            <View>
                <View style={Style.header}>
                    <Text style={Style.textLogo}>{APP_NAME}</Text>
                </View>
                <View style={Style.mainMenu}>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/menu/star.png')}/>
                        <Text style={Style.menuText}>Bình chọn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/menu/settings.png')}/>
                        <Text style={Style.menuText}>Cài đặt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/menu/contact.png')}/>
                        <Text style={Style.menuText}>Liên hệ</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.subMenu}>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>Thêm ứng dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Menu;
