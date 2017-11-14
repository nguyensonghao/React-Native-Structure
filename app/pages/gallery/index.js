import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Search from 'react-native-search-box';
import axios from 'axios';

import Style from './style';
import Item from './components/item';
import SearchProvider from '../../providers/search';

class Gallery extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            images: [],
            searchProvider: new SearchProvider()
        };
    }

    search() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    componentDidMount() {
        this.state.searchProvider.search('house', 1, 10).then(data => {
            this.setState({
                images: data
            })
        })
    }

    render() {
        const { images } = this.state;

        return (
            <View style={Style.container}>
                <Search
                    ref="search_box"
                    onSearch={() => this.search()}
                    backgroundColor="black"
                    placeholder="Tìm kiếm"
                    cancelTitle="Hủy"
                />
                
                <FlatList
                    data={images}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Item image={item} />}
                />
            </View>
        );
    }
}

export default Gallery;
