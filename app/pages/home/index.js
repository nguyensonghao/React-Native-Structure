
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SQLite from 'react-native-sqlite-storage';

import Style from './style';
import Slider from './components/slider';
import Profile from './components/profile';
import Loading from '../../components/loading';
import * as actions from '../../actions';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.setSqlite(SQLite.openDatabase({name : "data.sqlite", createFromLocation : 1}, () => {
            console.log('Open database success')
        }, () => {
            console.log('Open database');
        })));
    }
    
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.rows}>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/article.png')}
                            />
                            <Text style={Style.textIcon}>Mẹo vặt</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listForum()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/forum.png')}
                            />
                            <Text style={Style.textIcon}>Diễn đàn</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.gallery()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/photo.png')}
                            />
                            <Text style={Style.textIcon}>Khoảnh khắc</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Style.rows}>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={[Style.imgIcon, {width: 82, height: 60}]}
                                source={require('../../resources/images/note.png')}
                            />
                            <Text style={Style.textIcon}>Ghi chú</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.chat()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/chat.png')}
                            />
                            <Text style={Style.textIcon}>Trò chuyện</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/smile.png')}
                            />
                            <Text style={Style.textIcon}>Hài hước</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={Style.rows}>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/more.png')}
                            />
                            <Text style={Style.textIcon}>Thêm ứng dụng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.chat()}>
                        <View style={Style.boxItemWrapper}>
                            <Image
                                style={Style.imgIcon}
                                source={require('../../resources/images/settings.png')}
                            />
                            <Text style={Style.textIcon}>Cài đặt</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.boxItem} onPress={() => Actions.listArticle()}>
                        <View style={Style.boxItemWrapper}>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Home);
