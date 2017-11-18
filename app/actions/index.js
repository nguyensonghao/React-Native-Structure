import { CHANGE_LOADING, CHANGE_LIST_ARTICLE, SET_SQLITE, CHANGE_LIST_JOKE, CHANGE_LIST_CATE } from '../constants/actionTypes.js';

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

export function changeListJoke (list) {
	return {
		type: CHANGE_LIST_JOKE,
		list
	}
}

export function setSqlite (sqlite) {
	return {
		type: SET_SQLITE,
		sqlite
	}
}

export function changeListCate (list) {
	return {
		type: CHANGE_LIST_CATE,
		list
	}
}