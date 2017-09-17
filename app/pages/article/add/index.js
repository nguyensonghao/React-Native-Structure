import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

import Style from './style';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            height: 0
        }
    }
    
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.toolbar}>
                    <View style={[Style.toolbarItem, Style.toolbarItemFirst]}>
                        <Image source={require('../../../resources/images/picture.png')}/>
                        <Text style={Style.toolbarText}>Thêm ảnh</Text>
                    </View>
                    <View style={Style.toolbarItem}>
                        <Image source={require('../../../resources/images/mail.png')}/>
                        <Text style={Style.toolbarText}>Loại bài</Text>
                    </View>
                </View>
                <View style={Style.textInputContainer}>
                    <Image style={Style.avatar} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
                    <View style={Style.editorContainer}>
                        <TextInput 
                            style={Style.textInput}
                            multiline={true}
                            underlineColorAndroid='transparent'
                            placeholder="Nhập nội dung"
                            placeholderTextColor="#BDBDBD"
                            onChangeText={(text) => {
                                this.setState({ text })
                            }}
                            onContentSizeChange={(event) => {
                                this.setState({ height: event.nativeEvent.contentSize.height })
                            }}
                            style={{height: Math.max(35, this.state.height)}}
                            value={this.state.text}/>
                    </View>
                </View>
                <View style={Style.listButton}>
                    <TouchableOpacity style={Style.button}>
                        <Text style={Style.buttonPost}>Đăng bài</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.button, {backgroundColor: '#868e96'}]}>
                        <Text style={Style.buttonPost}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddArticle;
