import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';
import UtilService from '../../../../services/util';

export default class ItemNote extends Component {
	render () {
		const { note } = this.props;
		const date = UtilService.convertNiceDate(new Date(note.date));

		return (
			<TouchableOpacity style={Style.item}>
				<View style={Style.right}>
					<TouchableOpacity style={Style.button}>
						<Icon name="md-close" size={18}/>
					</TouchableOpacity>
					<TouchableOpacity style={Style.button}>
						<Icon name="md-create" size={18}/>
					</TouchableOpacity>
				</View>
	            <Text style={Style.title}>{note.title}</Text>
	            <Text style={Style.content}>{note.content}</Text>
	            <Text style={Style.date}>{date}</Text>
	        </TouchableOpacity>
		)
	}
}