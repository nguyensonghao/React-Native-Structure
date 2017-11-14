import { ActionConst } from 'react-native-router-flux';

import { CHANGE_LIST_JOKE } from '../constants/actionTypes.js';
const initialState = {
    list: []
};

export default function joke (state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_LIST_JOKE:
        	return {        
        		...state,
                list: action.list
        	}
        default:
    	    return state;
    }
} 