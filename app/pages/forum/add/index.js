import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';

import GlobalStyle from '../../../styles/global';

class AddForum extends Component {
    render() {
        return (
            <View style={GlobalStyle.container}>
                <RichTextEditor
	              	ref={(r)=>this.richtext = r}
	              	initialTitleHTML={'Tiêu đề'}
	              	initialContentHTML={'Nội dung'}
	              	editorInitializedCallback={() => this.onEditorInitialized()}
	          	/>
	          	<RichTextToolbar
	            	getEditor={() => this.richtext}
	          	/>
	          	<Text>Xin chao</Text>
            </View>
        );
    }
}

export default AddForum;
