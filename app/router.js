import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Home from './pages/home';
import NavbarStyle from './styles/navbar';
import { APP_NAME } from './constants/config';

export default RouterConfig = Actions.create(
    <Scene key="root" 
        navigationBarStyle={NavbarStyle.container}
        titleStyle={NavbarStyle.title}>
        <Scene key="home" title={APP_NAME} initial={true} component={Home} />
    </Scene>
);