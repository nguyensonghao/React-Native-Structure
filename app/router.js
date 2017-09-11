import React, { Component, Text, View, TouchableOpacity } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Home from './pages/home';
import ListArticle from './pages/article/list';
import DetailArticle from './pages/article/detail';
import ListForum from './pages/forum/list';
import AddForum from './pages/forum/add';
import Button from './components/button';
import ButtonIcon from './components/buttonIcon';
import NavbarStyle from './styles/navbar';
import { APP_NAME } from './constants/config';

export default class RouterApp extends Component {
    openMenu () {
        this.props.menuLeft.openDrawer();
    }

    render () {
        return (
            <Router>
                <Scene key="root" 
                    navigationBarStyle={NavbarStyle.container}
                    titleStyle={NavbarStyle.title}>
                    <Scene key="home" 
                        title={APP_NAME}
                        initial={true}
                        renderLeftButton={<ButtonIcon icon="bars" size={20} color="black" click={() => this.openMenu()}/>}
                        renderRightButton={<ButtonIcon icon="bell" size={20} color="black" click={() => alert("Show Menu")}/>}
                        component={Home} />

                    <Scene key="listArticle" 
                        title="Mẹo chăm sóc thú cưng"
                        // initial={true}  
                        component={ListArticle} />

                    <Scene key="detailArticle" 
                        title="Chi tiết bài đăng"
                        component={DetailArticle} />

                    <Scene key="listForum" 
                        title="Góc trao đổi" 
                        // initial={true} 
                        component={ListForum}
                        renderRightButton={<Button click={() => Actions.addForum()} text="Thêm"/>} />

                    <Scene key="addForum" 
                        title="Chia sẻ" 
                        component={AddForum} />
                </Scene>
            </Router>
        )
    }
}