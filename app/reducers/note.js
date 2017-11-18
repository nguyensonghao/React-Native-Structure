import { ActionConst } from 'react-native-router-flux';

import { CHANGE_LIST_CATE } from '../constants/actionTypes.js';
const initialState = {
    listCate: [],
    listNote: []
};

export default function note (state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_LIST_CATE:
        	return {        
        		...state,
                listCate: action.list
        	}
        default:
    	    return state;
    }
} 