import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

export default class ItemCate extends Component {
	render () {
		const { cate } = this.props;
		return (
			<TouchableOpacity style={Style.item}>
				<Image
	                style={Style.imgIcon}
	                source={require('../../../../resources/images/note/folder.png')}
	            />
	            <Text style={Style.title}>{cate.title}</Text>
	            <View style={Style.right}>
					<TouchableOpacity style={Style.button} onPress={() => this.props.showConfirm(cate.id)}>
						<Icon name="md-close" size={16}/>
					</TouchableOpacity>
				</View>
	        </TouchableOpacity>
		)
	}
}