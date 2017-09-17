import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Style from './style';

class ListComment extends Component {
    render() {
        return (
            <View style={Style.container}>
                <Text style={Style.title}>3 bình luận</Text>
                <View style={Style.comment}>
                    <Image style={Style.avatar} source={{uri: 'http://bigbeehive.com/demo/orientplay-angular/img/user/vector4.png'}}/>
                    <View style={Style.detail}>
                        <View style={Style.info}>
                            <Text style={Style.name}>Nguyen Song Hao</Text>
                            <Text style={Style.time}>9:00 PM</Text>
                        </View>
                        <Text style={Style.msg}>Peter Carlsson This is without doubt the greatest flim i’ve ever seen.</Text>
                    </View>
                </View>
                <View style={Style.comment}>
                    <Image style={Style.avatar} source={{uri: 'http://bigbeehive.com/demo/orientplay-angular/img/user/vector4.png'}}/>
                    <View style={Style.detail}>
                        <View style={Style.info}>
                            <Text style={Style.name}>Nguyen Song Hao</Text>
                            <Text style={Style.time}>9:00 PM</Text>
                        </View>
                        <Text style={Style.msg}>Peter Carlsson This is without doubt the greatest flim i’ve ever seen.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default ListComment;
