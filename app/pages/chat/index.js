import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import Style from'./style';
import { firebaseApp } from '../../firebaseApp';

class Chat extends Component {
    constructor(props) {
        super(props);
        this._message = firebaseApp.database().ref('/chat');
        this.state = {
            sendding: false,
            messages: [],
        };

        console.ignoredYellowBox = [
            'Setting a timer'
        ]
    }

    componentDidMount() {
        this._message.on('child_added', message => {
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message.val())
            }))
        })
    }

    componentWillUnmount() {
        this._message.off();
    }

    onSend(messages = []) {
        if (!this.state.sendding) {
            this.setState({
                sendding: true
            }, () => {
                firebaseApp.database().ref('/chat').push(messages, error => {
                    this.setState({
                        sendding: false
                    })

                    if (error) {
                        alert("Have an error");
                    }
                })
            })
        }
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                placeholder="Gủi tin nhắn"
                user={{
                    _id: 3,
                    name: 'Nguyen Song Hao',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                }}
        />
    );
  }
}

export default Chat;
