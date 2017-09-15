import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import Style from './style';

class Slider extends Component {
    render() {
        const  { height, width } = Dimensions.get('window');

        return (
            <View style={Style.container}>
                <View style={{width: width / 2}}>
                    <AutoHeightImage
                        style={Style.image}
                        width={width / 2}
                        imageURL={'https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg'}
                    />
                </View>
                <View style={{width: width / 2}}>
                    <View style={Style.row}>
                        <View>
                            <AutoHeightImage
                                style={Style.image}
                                width={width / 4}
                                imageURL={'https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg'}
                            />
                        </View>
                        <View>
                            <AutoHeightImage
                                style={Style.image}
                                width={width / 4}
                                imageURL={'https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg'}
                            />
                        </View>
                    </View>
                    <View style={Style.row}>
                        <View>
                            <AutoHeightImage
                                style={Style.image}
                                width={width / 4}
                                imageURL={'https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg'}
                            />
                        </View>
                        <View>
                            <AutoHeightImage
                                style={Style.image}
                                width={width / 4}
                                imageURL={'https://www.bacsithuy.org/wp-content/uploads/2017/09/tiem-vacxin-cho-cho-bao-nhieu-tien-va-co-nhung-loai-nao-758x506.jpg'}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Slider;
