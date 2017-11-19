import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';

import GlobalStyle from '../../../styles/global';
import Item from '../components/item';
import ActionToolbar from '../components/actionToolbar';
import FirebaseService from '../../../services/firebase';

class ListForum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listForum: []
        }
        
    }

    componentDidMount() {
        FirebaseService.addChild('forums', (data) => {
            let listForum = this.state.listForum;
            listForum.push(data);
            this.setState({listForum});
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
