import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Style from './style';
var interValId;

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: 0
        }
    }

    componentDidMount() {
        if (this.props.show) {
            setInterval(() => {
                this.setState({
                    state: this.state.rotation += 5
                })
            }, 5)
        }
    }

    componentDidUpdate() {
        if (!this.props.show) {
            clearInterval(interValId);
        }
    }
    
    render() {
        const { rotation } = this.state;
        const { show } = this.props;

        return (
            <Spinner visible={show} overlayColor="white">
                <View style={Style.loading}>
                    <Image
                        style={[Style.image, {transform: [{ rotate: rotation + 'deg'}]}]}
                        source={require('../../resources/images/bones.png')}
                    />
                </View>
            </Spinner>
        )
    }
}


export default Loading;
