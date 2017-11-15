import React, { Component, Text, View, TouchableOpacity } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

// Import list page
import Home from './pages/home';
import Chat from './pages/chat';
import Gallery from './pages/gallery';
import ListArticle from './pages/article/list';
import DetailArticle from './pages/article/detail';
import AddArticle from './pages/article/add';
import ListForum from './pages/forum/list';
import AddForum from './pages/forum/add';
import ListJoke from './pages/joke/list';
import DetailJoke from './pages/joke/detail';
import Settings from './pages/settings';

import Button from './components/button';
import ButtonRightHome from './components/buttonRightHome';
import ButtonIcon from './components/buttonIcon';
import NavbarStyle from './styles/navbar';
import { APP_NAME } from './constants/config';

const RouterWithRedux = connect()(Router);

export default class RouterApp extends Component {
    openMenu () {
        this.props.menuLeft.openDrawer();
    }

    render () {
        return (
            <RouterWithRedux>
                <Scene key="root" 
                    navigationBarStyle={NavbarStyle.container}
                    titleStyle={NavbarStyle.title}
                    renderRightButton={<ButtonIcon icon="ios-notifications" size={28} color="black" click={() => alert("Show Menu")}/>}>
                    <Scene key="home" 
                        title={APP_NAME}
                        // initial={true}
                        renderLeftButton={<ButtonIcon icon="md-menu" size={28} color="black" click={() => this.openMenu()}/>}
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
                        initial={true} 
                        title="Chia sẻ" 
                        component={AddForum} />

                    <Scene key="chat"
                        // initial={true} 
                        title="Trò chuyện" 
                        component={Chat} />
                    
                    <Scene key="gallery"
                        // initial={true} 
                        title="Khoảnh khắc" 
                        component={Gallery} />

                    <Scene key="listJoke"
                        // initial={true} 
                        title="Hài hước" 
                        component={ListJoke} />

                    <Scene key="detailJoke"
                        // initial={true} 
                        title="Hài hước" 
                        component={DetailJoke} />

                    <Scene key="settings"
                        // initial={true} 
                        title="Cài đặt" 
                        component={Settings} />
                </Scene>
            </RouterWithRedux>
        )
    }
}