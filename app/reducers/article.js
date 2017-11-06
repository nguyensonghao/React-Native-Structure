import { ActionConst } from 'react-native-router-flux';

import { CHANGE_LIST_ARTICLE } from '../constants/actionTypes.js';
const initialState = {
    list: []
};

export default function article (state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_LIST_ARTICLE:
        	return {        
        		...state,
                list: action.list
        	}
        default:
    	    return state;
    }
} 