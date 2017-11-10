import React, { Component } from 'react';
import { AppRegistry, DrawerLayoutAndroid } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';

import RouterApp from './app/router';
import Menu from './app/components/menu';
import reducer from './app/reducers';
const store = createStore(reducer);

export default class SoTayThuCung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuLeft: null,
            isLoading: false
        }
    }
  
    componentDidMount() {
        this.setState({
          menuLeft: this.refs.menuLeft
        })  

    // store.subscribe(() => {
    //   this.setState({
    //     isLoading: store.getState().isLoading
    //   })
    // })
    }

    render() {
        const { menuLeft, isLoading } = this.state;

        return (
            <DrawerLayoutAndroid
                ref="menuLeft"
                drawerWidth={270}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <Menu/>}>
                <Spinner visible={isLoading} />
                <Provider store={store}>
                  <RouterApp menuLeft={menuLeft} />
                </Provider>
            </DrawerLayoutAndroid>
        )
    }
}

AppRegistry.registerComponent('SoTayThuCung', () => SoTayThuCung);