import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

class CommentBox extends Component {
    render() {
        const {height, width} = Dimensions.get('window');

        return (
            <View style={[Style.footer, {width: width}]}>
                <View style={Style.commentContainer}>
                    <View style={Style.iconContainer}>
                        <Icon name="md-create" size={20} color="gray"/>
                    </View>
                    <View style={Style.inputContainer}>
                        <TextInput placeholder="Bình luận" style={Style.input}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default CommentBox;
