import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import GlobalStyle from '../../../styles/global';
import Item from '../components/item';
import Loading from '../../../components/loading';
import * as actions from '../../../actions';
import Style from './style';

class ListJoke extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.db.transaction((tx) => {
            tx.executeSql('SELECT * FROM joke', [], (tx, results) => {
                let list = [];
                for (let i = 0; i < results.rows.length; i++) {
                    let row = results.rows.item(i);
                    list.push(row);
                }

                this.props.dispatch(actions.changeListJoke(list));
            }, (err) => {
                alert(JSON.stringify(err));
            });
        });
    }
    
    render() {
        const { list } = this.props;

        return (
            <View style={[GlobalStyle.container, Style.container]}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Item joke={item} />}
                />
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        list: state.joke.list,
        db: state.sqlite.db
    }
}

export default connect(mapStateToProps)(ListJoke);

