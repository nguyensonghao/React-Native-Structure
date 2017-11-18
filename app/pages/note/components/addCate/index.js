import React, { Component } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import Prompt from 'react-native-prompt';

export default class AddCate extends Component {
	constructor(props) {
	  	super(props);
	}

	add (value) {
		if (value) {
			this.props.close();
			this.props.add(value);
		}
	}

	render () {
		const { show } = this.props;

		return (
	        <Prompt
			    title="Thêm danh mục"
			    placeholder="Tên danh mục"
			    defaultValue=""
			    visible={show}
			    submitText="Thêm"
			    cancelText="Đóng"
			    onCancel={() => this.props.close()}
			    onSubmit={(value) => this.add(value)}
			/>
		)
	}
}