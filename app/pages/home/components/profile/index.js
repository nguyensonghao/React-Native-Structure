import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Style from './style';

class Profile extends Component {
    render() {
        return (
            <View>            
                <View style={Style.container}>
                    <View style={Style.avatarContainer}>
                        <Image style={Style.avatar} source={require('../../../../resources/images/avatar.jpg')}/>
                    </View>
                    <View style={Style.rect}>
                        <View style={Style.rectLeft}></View>
                    </View>
                    <View style={Style.detail}>
                        <Text style={Style.name}>Nguyen Song Hao</Text>
                        <Text style={Style.subName}>Nguyen Song Hao</Text>
                        <Text style={Style.subName}>Nguyen Song Hao</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Profile;
