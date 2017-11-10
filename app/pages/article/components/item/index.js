import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import Style from './style';

class Item extends Component {
    render() {
        return (
            <TouchableOpacity style={Style.item} onPress={() => Actions.detailArticle({id: this.props.article.id, img: this.props.article.img})}>
                <AutoHeightImage
                    width={120}
                    imageURL={this.props.article.img}
                />
                <View style={Style.desc}>
                    <View style={Style.list}>
                        <Icon name="ios-heart" style={Style.iconButton} />
                        <Icon name="md-more" style={Style.iconButton} />
                        <Icon name="md-share" style={Style.iconButton} />
                    </View>
                    <Text style={Style.title}>{this.props.article.title}</Text>
                    <View style={Style.detail}>
                        <Text style={Style.detailItem}>20/10/2017</Text>
                        <Text style={Style.detailItem}>21Views</Text>
                        <Text style={Style.detailItem}>21Likes</Text>
                        <Text style={Style.detailItem}>21Ans</Text>
                    </View>
                </View>
            </TouchableOpacity >
        );
    }
}

export default Item;
