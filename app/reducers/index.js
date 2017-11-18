import { combineReducers } from 'redux';
import article from './article';
import joke from './joke';
import loading from './loading';
import sqlite from './sqlite';
import note from './note';

export default combineReducers({
    article,
    joke,
    loading,
    sqlite,
    note
})