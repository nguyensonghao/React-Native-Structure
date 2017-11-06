import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';

import Style from './style';
import { firebaseApp } from '../../../../firebaseApp.js';

class ListComment extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            listComment: []
        };
    }

    componentDidMount() {
        firebaseApp.database().ref('/comment').on('value', (data) => {
            let val = data.val();
            let listComment = [];
            for (var key in val) {
                listComment.push(val[key]);
            }

            this.setState({
                listComment: listComment
            })
        })
    }

    render() {
        const { listComment } = this.state;
        let listCommentBox = [];
        listComment.map((comment, key) => {
            listCommentBox.push(
            <View style={Style.comment} key={key}>
                <Image style={Style.avatar} source={{uri: 'http://bigbeehive.com/demo/orientplay-angular/img/user/vector4.png'}}/>
                <View style={Style.detail}>
                    <View style={Style.info}>
                        <Text style={Style.name}>Nguyen Song Hao</Text>
                        <Text style={Style.time}>{moment(comment.time).fromNow()}</Text>
                    </View>
                    <Text style={Style.msg}>{comment.msg}</Text>
                </View>
            </View>)
        })

        return (
            <View style={Style.container}>
                <Text style={Style.title}>{listComment.length} bình luận</Text>
                {listCommentBox}
            </View>
        );
    }
}

export default ListComment;
