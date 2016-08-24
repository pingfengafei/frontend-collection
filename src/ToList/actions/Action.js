/**
 * Created by pingfengafei on 16/8/18.
 */

/*
 * 定义action类型
 * 添加todo、修改todo的状态、设置显示条件
 */

//感觉redux有点好玩了

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 定义三种显示条件
 */
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};



/*
 *定义三个action对应的 action Creator
 */
export function addTodo(text) {
	return {type: ADD_TODO, text}
}

export function toggleTodo(index) {
	return {type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
	return {type: SET_VISIBILITY_FILTER, filter}
}
