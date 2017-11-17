
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SQLite from 'react-native-sqlite-storage';
import ActionButton from 'react-native-action-button';

import Style from './style';
import ItemNote from '../components/itemNote';
import ActionDetail from '../components/actionDetail';

class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.setState({
            list: [
                {
                    title: 'Danh sách công việc',
                    content: 'Lau nhà, nấu cơm, quét dọn'
                },
                {
                    title: 'Danh sách công việc',
                    content: 'Lau nhà, nấu cơm, quét dọn'
                },
                {
                    title: 'Danh sách công việc',
                    content: 'Lau nhà, nấu cơm, quét dọn'
                },
                {
                    title: 'Danh sách công việc',
                    content: 'Lau nhà, nấu cơm, quét dọn'
                },
                {
                    title: 'Danh sách công việc',
                    content: 'Lau nhà, nấu cơm, quét dọn'
                },
                {
                    title: 'Danh sách công việc',
                    content: 'Lau nhà, nấu cơm, quét dọn'
                }
            ]
        })
    }
    
    render() {
        const { list } = this.state;
        return (
            <View style={Style.container}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <ItemNote note={item} />}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)"/>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(ListNote);
