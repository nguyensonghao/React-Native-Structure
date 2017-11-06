import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import ImagePicker from 'react-native-image-picker';

import Style from './style';
import { firebaseApp } from '../../../firebaseApp.js';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            height: 0
        }
    }

    chooseImage () {
        var options = {
            title: 'Chọn ảnh',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                alert(response.uri);
            }
        });
    }

    add () {
        if (this.state.text) {
            firebaseApp.database().ref('/article').push({
                time: new Date().getTime(),
                content: this.state.text
            }, err => {
                if (err) {

                } else {
                    this.setState({
                        text: ""
                    })
                    this.forceUpdate();
                }
            })
        }
    }

    reset () {
        this.setState({
            text: ""
        })
    }
    
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.toolbar}>
                    <TouchableOpacity style={[Style.toolbarItem, Style.toolbarItemFirst]} onPress={() => this.chooseImage()}>
                        <Image source={require('../../../resources/images/picture.png')}/>
                        <Text style={Style.toolbarText}>Thêm ảnh</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={Style.button} onPress={() => this.add()}>
                        <Text style={Style.buttonPost}>Đăng bài</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[Style.button, {backgroundColor: '#868e96'}]} onPress={() => this.reset()}>
                        <Text style={Style.buttonPost}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AddArticle;
