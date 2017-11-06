import { combineReducers } from 'redux';
import article from './article';
import loading from './loading';
import sqlite from './sqlite';

export default combineReducers({
    article,
    loading,
    sqlite
})