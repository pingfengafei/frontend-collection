/**
 * Created by pingfengafei on 16/8/18.
 */

/*
 *reducer(previousState, action) --> newState
 * 函数,接受旧的state和action,并返回新的state,被称之为reducer
 */

import {VisibilityFilters} from './actions/Action';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actions/Action';
import {combineReducers} from 'redux';
/*
 *初始化状态集合
 * 简单只有包含2个子state
 * 过滤的条件+todo list
 */

// const initialState = {
// 	visibilityFilter: VisibilityFilters.SHOW_ALL, //初始化显示全部
// 	todos: [] //空的todo list 列表
// }

/*
 *let's make reducer
 * 原则:不修改旧的state + 永远默认返回旧的state
 * 以前不能理解是卡在了todos.map上,map操作真不好用
 */

// function addTodo(state = initialState, action) {
// 	switch (action.type) {
// 		case SET_VISIBILITY_FILTER:
// 			return Object.assign({}, state, {visibilityFilter: action.filter});
// 		case ADD_TODO:
// 			return Object.assign({}, state, {todos: [...state.todos, {text: action.text, completed: false}]});
// 		case TOGGLE_TODO:
// 			return Object.assign({}, state, {
// 				todos: state.todos.map((todo, index)=> {
// 					if (index == action.index) {
// 						return Object.assign({}, todo, {completed: !todo.completed});
// 					}
// 					else {
// 						return todo;
// 					}
// 				})
// 			});
// 		default:
// 			return state;
// 	}
// }

//拆分reduer,上面的reducer太繁琐了
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
	console.log('visibilityFilter');
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

function todos(state = [], action) {
	console.log('todos');
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			})
		default:
			return state
	}
}

//将2个reducer合并成一个reducer

// function todoApp(state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, atcion),
// 		todos: todos(state.todos, action)
// 	};
// }

//利用combineReducer合并reducer

const TodoAppReducer = combineReducers({
	visibilityFilter,
	todos
});

export default TodoAppReducer;

