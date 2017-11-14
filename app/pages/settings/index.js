import React, { Component } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	notify: false
        }
    }
    
    changeValue(notify) {
    	this.setState({notify});
    }
    
    render() {
    	const { notify } = this.state;

        return (
            <ScrollView style={GlobalStyle.container}>
                <View style={Style.item}>
                	<Icon style={Style.icon} name="ios-notifications"/>
                	<Text style={Style.text}>Nhận thông báo</Text>
                	<Switch style={Style.right} value={notify} onValueChange={notify => this.changeValue(notify)}/>
                </View>
            </ScrollView>
        );
    }
}

export default connect()(Settings);

