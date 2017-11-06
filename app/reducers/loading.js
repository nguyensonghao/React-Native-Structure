import { ActionConst } from 'react-native-router-flux';

import { CHANGE_LOADING } from '../constants/actionTypes.js';
const initialState = {
    isLoading: false
};

export default function loading (state = initialState, action = {}) {
    switch (action.type) {
        case CHANGE_LOADING:
        	return {        
        		...state,
                isLoading: action.status,
        	}            
        default:
    	    return state;
    	    break;
    }
} 