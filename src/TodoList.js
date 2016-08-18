/**
 * Created by pingfengafei on 16/8/15.
 */
import {Map, List} from 'immutable';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

import React from 'react';
import  {render}  from 'react-dom';

//组件
const components = {
	Todo({todo}) {
		if (todo.isDone) {
			return <strike>{todo.text}</strike>;
		} else {
			return <span>{todo.text}</span>;
		}
	},

	//列表 切换todo 添加todo
	TodoList({todos, toggleTodo, addTodo}) {
		const onSubmit = (e) => {
			const text = e.target.value;
			if (e.which === 13 && text.length > 0) {
				addTodo(text);
				e.target.value = '';
			}
		};

		const toggleClick = (id) => () => toggleTodo(id);

		//获得外部的组件Todo
		//components是对象,解构Todo
		const {Todo} = components;

		return (
			<div className='todo'>
				<input type='text'
							 className='todo__entry'
							 placeholder='Add todo'
							 onKeyDown={onSubmit}/>
				<ul className='todo__list'>
					{todos.map(t => (
						<li
							key={t.get('id')}
							className='todo__item'
							onClick={toggleClick(t.get('id'))}>
							<Todo todo={t.toJS()}/>
						</li>
					))}
				</ul>
			</div>
		);
	}
};


// Action and Action Reducer
const actions = {
	addTodo(text) {
		return {
			type: 'ADD_TODO',
			payload: {
				id: Math.random().toString(34).slice(2),
				isDone: false,
				text
			}
		};
	},
	toggleTodo(id) {
		return {
			type: 'TOGGLE_TODO',
			payload: id
		}
	}
};

const init = List();

//reducer
const reducer = function (state = init, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.push(
				Map(action.payload)
			);
		case 'TOGGLE_TODO':
			return state.map(t => {
				if (t.get('id') == action.payload) {
					return t.update('isDone', isDone => !isDone);
				} else {
					return t;
				}
			});
		default:
			return state;
	}
};

//最终显示的数据
const containers = {
	TodoList: connect(
		function mapStateToProps(state) {
			return {
				todos: state
			};
		},
		function mapDispatchToProps(dispatch) {
			return {
				toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
				addTodo: (text) => dispatch(actions.addTodo(text))
			};
		}
	)(components.TodoList)
};


/*
 container 是一个对象,TodoList是container里的一个字段,使用es6解构赋值
 */
const {TodoList} = containers;
const store = createStore(reducer);

// render(
// 	<Provider store={store}>
// 		<TodoList />
// 	</Provider>,
// 	document.getElementById('app')
// );
