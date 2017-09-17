import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';

import GlobalStyle from '../../../styles/global';
import Item from '../components/item';
import Loading from '../../../components/loading';

class ListArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listArticle: [],
            showLoading: true
        }
    }
    
    componentWillMount() {
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
        
        setTimeout(() => {
            this.setState({
                showLoading: false
            })
        }, 1000)
    }
    
    render() {
        const { showLoading } = this.state;

        return (
            <View style={GlobalStyle.container}>
                <FlatList
                    data={this.state.listArticle}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Item article={item} />}
                />
                
                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => {Actions.addArticle()}}/>
            </View>
        );
    }
}

export default ListArticle;
