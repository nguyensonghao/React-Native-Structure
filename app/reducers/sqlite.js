import { ActionConst } from 'react-native-router-flux';

import { SET_SQLITE } from '../constants/actionTypes.js';
const initialState = {
    sqlite: null
};

export default function sqlite (state = initialState, action = {}) {
    switch (action.type) {
        case SET_SQLITE:
        	return {        
        		...state,
                sqlite: action.sqlite
        	}
        default:
    	    return state;
    }
} 