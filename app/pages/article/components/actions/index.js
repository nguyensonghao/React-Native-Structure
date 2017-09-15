import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

class Actions extends Component {
    render() {
        return (
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="Thêm bài" onPress={() => console.log("notes tapped!")}>
                    <Icon name="md-create" style={Style.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Thông báo khi có bài mới" onPress={() => {}}>
                    <Icon name="md-notifications-off" style={Style.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="Phân trang" onPress={() => {}}>
                    <Icon name="md-done-all" style={Style.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        );
    }
}

export default Actions;
