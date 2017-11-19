
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SQLite from 'react-native-sqlite-storage';
import ActionButton from 'react-native-action-button';

import Style from './style';
import ItemNote from '../components/itemNote';
import ActionDetail from '../components/actionDetail';
import SqliteService from '../../../services/sqlite';

class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        Actions.refresh({title: this.props.cate.title});
    }

    componentDidMount() {
        SqliteService.findListByField(this.props.db, 'note', 'cate_id', this.props.cate.id).then(list => {
            this.setState({list});
        })
    }
    
    render() {
        const { list } = this.state;
        const { cate } = this.props;

        return (
            <View style={Style.container}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <ItemNote note={item} />}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => Actions.addNote({cate: cate})}/>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        isLoading: state.isLoading,
        db: state.sqlite.db
    }
}

export default connect(mapStateToProps)(ListNote);
