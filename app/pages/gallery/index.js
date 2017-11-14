import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import Style from './style';
import Item from './components/item';
import SearchService from '../../services/search';
import SearchBox from './components/searchBox';

class Gallery extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            images: [],
            searchService: new SearchService()
        };
    }

    componentDidMount() {
        // this.state.searchService.search('house', 1, 10).then(data => {
        //     this.setState({
        //         images: data
        //     })
        // })
    }

    search(text) {
        alert(text);
    }

    render() {
        const { images } = this.state;

        return (
            <View style={Style.container}>
                <SearchBox search={(text) => this.search(text)}/>
                
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
