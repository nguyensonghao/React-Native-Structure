import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';

import GlobalStyle from '../../../styles/global';
import Item from '../components/item';
import Loading from '../../../components/loading';
import * as actions from '../../../actions';

class ListArticle extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.dispatch(actions.changeListArticle([
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
        ]))
    }
    
    render() {
        const { list } = this.props;

        return (
            <View style={GlobalStyle.container}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Item article={item} />}
                />
                
                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => {Actions.addArticle()}}/>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        list: state.article.list
    }
}

export default connect(mapStateToProps)(ListArticle);

