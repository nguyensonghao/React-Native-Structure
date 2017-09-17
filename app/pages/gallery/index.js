import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Search from 'react-native-search-box';

import Style from './style';

class Gallery extends Component {
    search() {
        alert('test');
    }

    render() {
        return (
            <View style={Style.container}>
                <Search
                    ref="search_box"
                    onSearch={() => this.search()}
                    backgroundColor="black"
                    placeholder="Tìm kiếm"
                    cancelTitle="Hủy"
                />
                <Text>gallery</Text>
            </View>
        );
    }
}

export default Gallery;
