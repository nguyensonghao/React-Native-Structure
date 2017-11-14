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
        this.props.db.transaction((tx) => {
            tx.executeSql('SELECT * FROM cate_article', [], (tx, results) => {
                let list = [];
                for (let i = 0; i < results.rows.length; i++) {
                    let row = results.rows.item(i);
                    if (i < 10) {
                        list.push(row);
                    }
                }

                this.props.dispatch(actions.changeListArticle(list));
            }, (err) => {
                alert(JSON.stringify(err));
            });
        });
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
        list: state.article.list,
        db: state.sqlite.db
    }
}

export default connect(mapStateToProps)(ListArticle);

