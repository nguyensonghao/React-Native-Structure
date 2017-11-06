import { CHANGE_LOADING, CHANGE_LIST_ARTICLE, SET_SQLITE } from '../constants/actionTypes.js';

export function changeLoading (status) {
    return {
    	type: CHANGE_LOADING,
    	status
    }
}

export function changeListArticle (list) {
	return {
		type: CHANGE_LIST_ARTICLE,
		list
	}
}

export function setSqlite (sqlite) {
	return {
		type: SET_SQLITE,
		sqlite
	}
}