import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import RouterConfig from './app/router';

export default class SoTayThuCung extends Component {
  render() {
    return <Router scenes={RouterConfig}/>
  }
}

AppRegistry.registerComponent('SoTayThuCung', () => SoTayThuCung);
