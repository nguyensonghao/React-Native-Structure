import { ActionConst } from 'react-native-router-flux';
import SQLite from 'react-native-sqlite-storage';

import { SET_SQLITE } from '../constants/actionTypes.js';
const initialState = {
    db: SQLite.openDatabase({name : "data.sqlite", createFromLocation : 1})
};

export default function sqlite (state = initialState, action = {}) {
    switch (action.type) {
        case SET_SQLITE:
        	return {        
        		...state,
                db: action.sqlite
        	}
        default:
    	    return state;
    }
} 