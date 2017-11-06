import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Hideo } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';
import { firebaseApp } from '../../../../firebaseApp';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            sending: false
        }
        console.ignoredYellowBox = [
            'Setting a timer'
        ]
    }
    
    sendComment () {
        if (!this.state.sending && this.state.comment) {
            this.setState({
                sending: true
            }, () => {
                firebaseApp.database().ref('/comment').push({
                    msg: this.state.comment,
                    time: new Date().getTime()
                }, (err) => {
                    if (err) {

                    } else {
                        this.setState({
                            comment: "",
                            sending: false
                        })
                        this.forceUpdate();
                    }
                })
            })
        }        
    }

    clearComment () {
        this.setState({
            comment: ""
        })
    }

    render() {
        const {height, width} = Dimensions.get('window');
        const { comment } = this.state;

        return (
            <View>
                <View style={Style.commentContainer}>
                    <View style={Style.inputContainer}>
                        <TextInput 
                            placeholder="Bình luận" 
                            style={Style.input}
                            multiline={true}
                            returnKeyType='go'
                            blurOnSubmit={true}
                            value={comment}
                            onChangeText={(comment) => this.setState({comment})}
                            onSubmitEditing={() => this.sendComment()}/>
                    </View>
                </View>
                <View style={Style.listButton}>
                    <TouchableOpacity style={Style.btnPost} onPress={() => this.sendComment()}>
                        <Text style={Style.btnPostText}>Đăng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.btnCancel} onPress={() => this.clearComment()}>
                        <Text style={Style.btnCancelText}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default CommentBox;
