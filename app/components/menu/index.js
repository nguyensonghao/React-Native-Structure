import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Style from './style';

class Menu extends Component {
    render() {
        return (
            <View>
                <View style={Style.header}></View>
                <View style={Style.mainMenu}>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>More App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>More App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>More App</Text>
                    </TouchableOpacity>
                </View>
                <View style={Style.subMenu}>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>More App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>More App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>More App</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.menuItem}>
                        <Image style={Style.menuIcon} source={require('../../resources/images/app.png')}/>
                        <Text style={Style.menuText}>More App</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Menu;
