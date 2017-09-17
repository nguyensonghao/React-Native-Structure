import React, { Component, Text, View, TouchableOpacity } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Home from './pages/home';
import Chat from './pages/chat';
import Gallery from './pages/gallery';
import ListArticle from './pages/article/list';
import DetailArticle from './pages/article/detail';
import AddArticle from './pages/article/add';
import ListForum from './pages/forum/list';
import AddForum from './pages/forum/add';
import Button from './components/button';
import ButtonRightHome from './components/buttonRightHome';
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
                    titleStyle={NavbarStyle.title}
                    renderRightButton={<ButtonIcon icon="ios-notifications-outline" size={28} color="#616161" click={() => alert("Show Menu")}/>}>
                    <Scene key="home" 
                        title={APP_NAME}
                        initial={true}
                        renderLeftButton={<ButtonIcon icon="ios-menu-outline" size={28} color="#616161" click={() => this.openMenu()}/>}
                        renderRightButton={<ButtonRightHome/>}
                        component={Home} />

                    <Scene key="listArticle" 
                        title="Mẹo chăm sóc thú cưng"
                        // initial={true}  
                        component={ListArticle} />

                    <Scene key="detailArticle" 
                        // initial={true}
                        title="Chi tiết bài đăng"
                        component={DetailArticle} />

                    <Scene key="addArticle" 
                        //initial={true}
                        title="Viêt bài"
                        component={AddArticle} />

                    <Scene key="listForum" 
                        title="Góc trao đổi" 
                        // initial={true} 
                        component={ListForum} />

                    <Scene key="addForum" 
                        title="Chia sẻ" 
                        component={AddForum} />

                    <Scene key="chat"
                        // initial={true} 
                        title="Trò chuyện" 
                        component={Chat} />
                    
                    <Scene key="gallery"
                        //initial={true} 
                        title="Ảnh đẹp" 
                        component={Gallery} />
                </Scene>
            </Router>
        )
    }
}