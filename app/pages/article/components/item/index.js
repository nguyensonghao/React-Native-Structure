import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import ItemStyle from './style';

class Item extends Component {
    render() {
        return (
            <TouchableOpacity style={ItemStyle.item} onPress={() => Actions.detailArticle({id: this.props.id})}>
                <AutoHeightImage
                    width={120}
                    imageURL={this.props.article.image}
                />
                <View style={ItemStyle.desc}>
                    <Text style={ItemStyle.title}>{this.props.article.title}</Text>
                    <View style={ItemStyle.social}>
                        <View style={ItemStyle.socialItem}>
                            <Text style={ItemStyle.gray}>500</Text>
                            <Icon name="share" size={13} color="gray"/>
                        </View>
                        <View style={ItemStyle.socialItem}>
                            <Text style={ItemStyle.gray}>500</Text>
                            <Icon name="thumbs-o-up" size={13} color="gray"/>
                        </View>
                        <View style={ItemStyle.socialItem}>
                            <Text style={ItemStyle.gray}>500</Text>
                            <Icon name="eye" size={13} color="gray"/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        );
    }
}

export default Item;
