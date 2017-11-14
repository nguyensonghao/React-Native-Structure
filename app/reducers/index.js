import { combineReducers } from 'redux';
import article from './article';
import joke from './joke';
import loading from './loading';
import sqlite from './sqlite';

export default combineReducers({
    article,
    joke,
    loading,
    sqlite
})