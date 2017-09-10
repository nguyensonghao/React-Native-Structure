import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import GlobalStyle from '../../../styles/global';
import Item from '../components/item';


class ListArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listArticle: []
        }
    }
    
    componentDidMount() {
        this.setState({
            listArticle: [
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
        return (
            <View style={GlobalStyle.container}>
                <FlatList
                    data={this.state.listArticle}
                    renderItem={({item}) => <Item article={item} />}
                />
            </View>
        );
    }
}

export default ListArticle;
