import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

export default class SearchBox extends Component {
	constructor(props) {
	  	super(props);
	
	 	this.state = {
	 		text: "",
	 		widthButton: 0
	 	};
	}

	changeText(text) {
		this.setState({
			text: text,
			widthButton: text ? 60 : 0
		})
	}

	clearSearch() {
		this.setState({
			text: "",
			widthButton: 0
		})
	}

	querySearch () {
		this.props.search(this.state.text);
	}

	render () {
		const { height, width } = Dimensions.get('window');
		const { widthButton } = this.state;

		return (
			<View style={Style.container}>
				<TextInput
				    style={[Style.box, {width: width - widthButton}]}
				    underlineColorAndroid="transparent"
				    onSubmitEditing={() => this.querySearch()}
				    placeholder="Nhập từ khóa tìm kiếm"
				    onChangeText={text => this.changeText(text)}
				    value={this.state.text}
				/>

				{ widthButton ? (
					<View style={Style.groupButton}>
						<TouchableOpacity style={Style.button} onPress={() => this.clearSearch()}>
							<Icon name="md-close" style={Style.icon}/>
						</TouchableOpacity>
						<TouchableOpacity style={Style.button} onPress={() => this.querySearch()}>
							<Icon name="md-search" style={Style.icon}/>
						</TouchableOpacity>
					</View>
				) : null}
			</View>
		)
	}
}