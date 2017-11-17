import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

export default class ItemNote extends Component {
	render () {
		const { note } = this.props;
		return (
			<TouchableOpacity style={Style.item}>
				<View style={Style.right}>
					<TouchableOpacity style={Style.button}>
						<Icon name="md-close" size={16}/>
					</TouchableOpacity>
					<TouchableOpacity style={Style.button}>
						<Icon name="md-radio-button-on" size={16}/>
					</TouchableOpacity>
				</View>
	            <Text style={Style.title}>{note.title}</Text>
	            <Text style={Style.content}>{note.content}</Text>
	            <Text style={Style.date}>05 thg 10 2017 10:14</Text>
	        </TouchableOpacity>
		)
	}
}