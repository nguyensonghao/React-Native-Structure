import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';

import GlobalStyle from '../../../styles/global';
import Style from './style';
import { TOOLBAR_SETTINGS } from './toolbar';

class AddForum extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		title: ""
	  	}
	}

    render() {
    	const  { height, width } = Dimensions.get('window');

        return (
            <View style={[GlobalStyle.container, Style.container, {width: width}]}>
                <RichTextEditor
	              	ref={(r)=>this.richtext = r}
	              	style={Style.editor}
	              	initialTitleHTML={'Tiêu đề'}
	              	initialContentHTML={'Nội dung'}
	              	editorInitializedCallback={() => this.onEditorInitialized()}
	          	/>

	          	<RichTextToolbar
	          		selectedButtonStyle={Style.toolbarButton}
	            	getEditor={() => this.richtext}
	            	actions={TOOLBAR_SETTINGS}
	          	/>
            </View>
        );
    }
}

export default AddForum;
