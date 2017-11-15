import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';

import GlobalStyle from '../../../styles/global';
import Item from '../components/item';
import ActionToolbar from '../components/actionToolbar';

class ListForum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listForum: []
        }
        
    }

    componentDidMount() {
        this.setState({
            listForum: [
                {
                    id: 1,
                    title: "Tiêm vacxin cho chó bao nhiêu tiền và có những loại nào",
                    image: "https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg"
                },
                {
                    id: 2,
                    title: "Tiêm vacxin cho chó bao nhiêu tiền và có những loại nào",
                    image: "https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg"
                }
            ]
        })
    }
    
    render() {
        const { listForum } = this.state;

        return (
            <View style={GlobalStyle.container}>
                <FlatList
                    data={listForum}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Item forum={item} />}
                />
                <ActionToolbar/>
            </View>
        );
    }
}

export default ListForum;
