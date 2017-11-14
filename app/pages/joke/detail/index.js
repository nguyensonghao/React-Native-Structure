import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import GlobalStyle from '../../../styles/global';
import Style from './style';

class DetailJoke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: {}
        }
    }

    componentDidMount() {
        this.props.db.transaction((tx) => {
            tx.executeSql('SELECT * FROM joke WHERE id = ' + this.props.id, [], (tx, results) => {
                this.setState({
                    joke: results.rows.item(0)
                })
            });
        });
    }
    
    render() {
        const { joke } = this.state;

        return (
            <View style={GlobalStyle.container}>
                <ScrollView>
                    <Text style={Style.title}>{joke.title}</Text>
                    <Text style={Style.content}>{joke.content}</Text>
                </ScrollView>
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