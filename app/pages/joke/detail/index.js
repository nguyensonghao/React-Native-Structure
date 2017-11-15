import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import GlobalStyle from '../../../styles/global';
import Style from './style';
import Toolbar from '../components/toolbar';
import SqliteService from '../../../services/sqlite';
import UtilService from '../../../services/util';

class DetailJoke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: {}
        }
    }

    componentDidMount() {
        SqliteService.find(this.props.db, 'joke', this.props.id).then(joke => {
            this.setState({joke});
        })
    }

    next () {
        let id = this.state.joke.id + 1;
        SqliteService.find(this.props.db, 'joke', id).then(joke => {
            if (joke) {
                this.setState({joke});
                Actions.refresh({title: joke.title});
            } else {
                UtilService.alert('Thông báo', 'Đã là bài cuối rồi!');
            }
        })
    }

    previous () {
        let id = this.state.joke.id - 1;
        SqliteService.find(this.props.db, 'joke', id).then(joke => {
            if (joke) {
                this.setState({joke});
                Actions.refresh({title: joke.title});
            } else {
                UtilService.alert('Thông báo', 'Đã là bài đầu rồi!');
            }
        })
    }

    love () {

    }

    share () {

    }
    
    render() {
        const { joke } = this.state;

        return (
            <View style={GlobalStyle.container}>
                <ScrollView>
                    <Text style={Style.title}>{joke.title}</Text>
                    <Text style={Style.content}>{joke.content}</Text>
                </ScrollView>
                <Toolbar 
                    previous={() => this.previous()}
                    next={() => this.next()}
                    love={() => this.love()}
                    share={() => this.share()}/>
            </View>
        );
    }
}


function mapStateToProps (state) {
    return {
        db: state.sqlite.db
    }
}

export default connect(mapStateToProps)(DetailJoke);