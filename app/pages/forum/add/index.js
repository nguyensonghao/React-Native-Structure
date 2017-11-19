import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';
import Icon from 'react-native-vector-icons/Ionicons';

import GlobalStyle from '../../../styles/global';
import Style from './style';
import { TOOLBAR_SETTINGS } from './toolbar';
import FirebaseService from '../../../services/firebase';
import UtilService from '../../../services/util';

class AddForum extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		title: "Tiêu đề",
	  		content: "Nội dung",
	  	}
	}

	add () {
		if (!this.state.title || !this.state.content) {
			UtilService.toast('Hãy điền đầy đủ thông tin của bài đăng!');
		} else {
			FirebaseService.insert('forums', {
				title: this.state.title,
				content: this.state.content,
				like: 0,
				comment: 0,
				time: new Date().getTime(),
				user: {
					name: 'Nguyễn Song Hào'
				}
			}).then(result => {
				UtilService.toast('Thêm bài đăng thành công!');
				this.setState({
			  		title: "Tiêu đề",
			  		content: "Nội dung",
			  	})
			})
		}
	}

	onEditorInitialized () {
        this.getHTML();
    }

    async getHTML() {
        let content = await this.richtext.getContentHtml();
        let title = await this.richtext.getTitleHtml();
        this.setState({
            title,
            content
        })
    }

    render() {
    	const  { height, width } = Dimensions.get('window');
    	const { title, content } = this.state;

        return (
            <View style={[GlobalStyle.container, Style.container, {width: width}]}>
                <RichTextEditor
	              	ref={(r)=>this.richtext = r}
	              	style={Style.editor}
	              	initialTitleHTML={title}
	              	initialContentHTML={content}
	              	editorInitializedCallback={() => this.onEditorInitialized()}
	          	/>

	          	<RichTextToolbar
	          		selectedButtonStyle={Style.toolbarButton}
	            	getEditor={() => this.richtext}
	          	/>

	          	<TouchableOpacity style={Style.buttonAdd} onPress={() => this.add()}>
	          		<Icon name="md-add" color="black" size={24} style={Style.buttonAddIcon}/>
	          		<Text style={Style.buttonAddText}>Thêm</Text>
	          	</TouchableOpacity>
            </View>
        );
    }
}

export default AddForum;
