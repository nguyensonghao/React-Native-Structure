import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

export default class ActionToolbar extends Component {
	render () {
		return (
			<ActionButton buttonColor="rgba(231,76,60,1)">
	          	<ActionButton.Item buttonColor='white' 
	          		title="Thêm bài đăng" 
	          		onPress={() => Actions.addForum()}>
	            	<Icon name="md-create" size={24}/>
	          	</ActionButton.Item>
	          	<ActionButton.Item buttonColor='white' title="Bài đăng của tôi" onPress={() => {}}>
	            	<Icon name="md-menu" size={24}/>
	          	</ActionButton.Item>
	        </ActionButton>
		)
	}
}