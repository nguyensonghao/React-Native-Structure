import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import UtilService from '../../../../services/util';
import Style from './style';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    show (isOpen) {
        this.setState({isOpen});
    }

    confirm (date) {
        this.show(false);
        this.props.change(date);
    }
    
    render() {
        const { isOpen } = this.state;
        const { date } = this.props;
        const titleDate = UtilService.convertNiceDate(date);

        return (
            <View style={Style.container}>
                <TouchableOpacity style={Style.button} onPress={() => this.show(true)}>
                    <Text style={Style.date}>Thời gian: {titleDate}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode="datetime"
                    is24Hour={true}
                    date={date}
                    isVisible={isOpen}
                    onConfirm={(date) => this.confirm(date)}
                    onCancel={() => this.show(false)}
                />
            </View>
        );
    }
}
