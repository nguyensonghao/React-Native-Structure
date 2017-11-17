import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

export default class ActionDetail extends Component {
	render () {
		return (
	        <ActionButton buttonColor="rgba(231,76,60,1)">
	          	<ActionButton.Item buttonColor='white' title="Thêm danh mục" onPress={() => this.props.showAdd()}>
	            	<Icon name="md-create" style={Style.actionButtonIcon} />
	          	</ActionButton.Item>
	          	<ActionButton.Item buttonColor='white' title="Hẹn giờ" onPress={() => {}}>
	            	<Icon name="md-notifications" style={Style.actionButtonIcon} />
	          	</ActionButton.Item>
	        </ActionButton>
		)
	}
}