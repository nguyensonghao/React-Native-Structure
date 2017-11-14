import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PhotoGrid  from 'react-native-thumbnail-grid';

import Item from '../listImage';

export default class ListImage extends Component {
	showImage (url) {
		console.log(url);
	}

	render () {
		const { images } = this.props;
		alert(images);

		return (
			<FlatList
		        data={images}
		        keyExtractor={(item, index) => index}
		        renderItem={({item}) => <Item image={item} />}
		    />
		)
	}
}