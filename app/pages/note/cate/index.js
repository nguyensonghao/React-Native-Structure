import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SQLite from 'react-native-sqlite-storage';
import { ConfirmDialog } from 'react-native-simple-dialogs';

import Style from './style';
import ItemCate from '../components/itemCate';
import ActionDetail from '../components/actionDetail';
import AddCate from '../components/addCate';
import NoteService from '../../../services/note';
import UtilService from '../../../services/util';
import SqliteService from '../../../services/sqlite';
import * as actions from '../../../actions';
import ConfirmDetele from '../components/confirmDelete';

class Note extends Component {
    constructor(props) {
        super(props);
        this.noteService = new NoteService();
        this.state = {
            isShowAdd: false,
            isShowConfirmDelete: false,
            currentId: null
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList () {
        SqliteService.all(this.props.db, 'cate_note').then(data => {
            this.props.dispatch(actions.changeListCate(data));
        })
    }

    showAdd (status) {
        this.setState({
            isShowAdd: status
        })
    }

    addCate (value) {
        this.noteService.insertCate(this.props.db, value).then(data => {
            UtilService.toast('Thêm danh mục thành công!');
            this.getList();
        })
    }

    showConfirmDelete (isShowConfirmDelete, id = null) {
        this.setState({
            isShowConfirmDelete,
            currentId: id
        });
    }

    deleteCate () {
        SqliteService.delete(this.props.db, 'cate_note', this.state.currentId).then(data => {
            this.getList();  
            this.showConfirmDelete(false);
        })
    }
    
    render() {
        const { isShowAdd, isShowConfirmDelete } = this.state;
        const { list } = this.props;

        return (
            <View style={Style.container}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <ItemCate showConfirm={(id) => this.showConfirmDelete(true, id)} cate={item} />}
                />
                <ActionDetail showAdd={() => this.showAdd(true)} />
                <AddCate show={isShowAdd} 
                    add={(value) => this.addCate(value)} 
                    close={() => this.showAdd(false)}/>
                <ConfirmDetele show={isShowConfirmDelete} 
                    delete={() => this.deleteCate()}
                    close={() => this.showConfirmDelete(false)}/>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        db: state.sqlite.db,
        list: state.note.listCate
    }
}

export default connect(mapStateToProps)(Note);
