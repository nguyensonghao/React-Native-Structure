import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

class ActionsDetail extends Component {
    render() {
        return (
            <ActionButton buttonColor="rgba(231,76,60,1)" offsetY={60}>
                <ActionButton.Item buttonColor='#9b59b6' title="Bình luận" onPress={() => this.props.addComment()}>
                    <Icon name="md-create" style={Style.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Sao chép" onPress={() => {}}>
                    <Icon name="md-copy" style={Style.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="Phóng to" onPress={() => this.props.zoomOut()}>
                    <Icon name="md-add" style={Style.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#CDDC39' title="Thu nhỏ" onPress={() => this.props.zoomIn()}>
                    <Icon name="md-remove" style={Style.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        );
    }
}

export default ActionsDetail;
