import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';

import GlobalStyle from '../../../styles/global';
import Style from './style';
import CommentBox from '../components/commentBox';
import ListComment from '../components/listComment';
import ActionsDetail from '../components/actionDetail';

class DetailArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            content: "",
            showComment: false,
            fontSize: 14
        }
    }

    componentDidMount() {
        this.props.db.transaction((tx) => {
            tx.executeSql('SELECT * FROM article WHERE cate_id = ' + this.props.id, [], (tx, results) => {
                this.setState({
                    article: results.rows.item(0)
                })
            });
        });
    }

    addComment () {        
        this.setState({
            showComment: true
        })
    }

    zoomOut () {        
        if (this.state.fontSize < 20) {
            this.setState({
                fontSize: ++this.state.fontSize
            })
        }
    }

    zoomIn () {
        if (this.state.fontSize > 10) {
            this.setState({
                fontSize: --this.state.fontSize
            })
        }
    }
    
    render() {
        const { showComment, fontSize, article } = this.state;
        const { img, id } = this.props;
        const  { height, width } = Dimensions.get('window');
        const fontText = {
            p: {
                fontSize: fontSize
            }
        }
        const StyleHtml = Object.assign(Style, fontText);        

        return (
            <View style={GlobalStyle.container}>
                <ScrollView>
                    <Text style={Style.title}>{article.title}</Text>
                    <AutoHeightImage
                        style={Style.image}
                        width={width}
                        imageURL={img}
                    />
                    <HTMLView
                        value={article.content}
                        stylesheet={StyleHtml}
                    />
                    <ListComment id={id}/>
                    <CommentBox id={id}/>
                </ScrollView>
                <ActionsDetail 
                    addComment={() => this.addComment()} 
                    zoomIn={() => this.zoomIn()} 
                    zoomOut={() => this.zoomOut()}/>
            </View>
        );
    }
}


function mapStateToProps (state) {
    return {
        db: state.sqlite.db
    }
}

export default connect(mapStateToProps)(DetailArticle);