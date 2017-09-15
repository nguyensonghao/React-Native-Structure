import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import RouterApp from './app/router';
import Menu from './app/components/menu';

export default class SoTayThuCung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuLeft: null
    }
  }
  
  componentDidMount() {
    this.setState({
      menuLeft: this.refs.menuLeft
    })  
  }

  render() {
    const { menuLeft } = this.state;

    return (
      <DrawerLayoutAndroid
        ref="menuLeft"
        drawerWidth={270}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu/>}>
        <RouterApp menuLeft={menuLeft}/>
      </DrawerLayoutAndroid>
    )
  }
}

AppRegistry.registerComponent('SoTayThuCung', () => SoTayThuCung);
