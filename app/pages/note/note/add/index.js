
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SQLite from 'react-native-sqlite-storage';
import ActionButton from 'react-native-action-button';
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';
import Icon from 'react-native-vector-icons/Ionicons';

import Timer from '../../components/timer';
import Style from './style';
import UtilService from '../../../../services/util';
import NoteService from '../../../../services/note';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.noteService = new NoteService();
        this.state = {
            date: new Date(),
            title: 'Tiêu đề',
            content: 'Nội dung'
        }
    }

    onEditorInitialized () {
        this.getHTML();
    }

    async getHTML() {
        let content = await this.richtext.getContentHtml();
        let title = await this.richtext.getTitleHtml();
        this.setState({
            title,
            content
        })
    }

    add () {
        if (!this.state.title || !this.state.content) {
            UtilService.toast("Hãy điền đầy đủ thông tin ghi chú!");
        } else {
            let note = {
                date: new Date(this.state.date).toString(),
                title: this.state.title,
                content: this.state.content,
                cate_id: this.props.cate.id                
            }

            this.noteService.insertNote(this.props.db, note).then(data => {
                UtilService.toast("Thêm ghi chú thành công!");
                this.setState({
                    date: new Date(),
                    title: 'Tiêu đề',
                    content: 'Nội dung'
                })
            })
        }
    }

    changeDate (date) {
        this.setState({date});
    }
    
    render() {
        const { date, title, content } = this.state;

        return (
            <View style={Style.container}>
                <Timer date={date} change={(date) => this.changeDate(date)}/>
                <RichTextEditor
                    ref={(r)=>this.richtext = r}
                    style={Style.editor}
                    initialTitleHTML={title}
                    initialContentHTML={content}
                    editorInitializedCallback={() => this.onEditorInitialized()}
                />

                <RichTextToolbar
                    getEditor={() => this.richtext}
                />

                <TouchableOpacity style={Style.buttonAdd} onPress={() => this.add()}>
                    <Icon style={Style.buttonAddIcon} name="md-add" size={24}/>
                    <Text style={Style.buttonAddText}>Thêm</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        isLoading: state.isLoading,
        db: state.sqlite.db
    }
}

export default connect(mapStateToProps)(AddNote);
