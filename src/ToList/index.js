/**
 * Created by pingfengafei on 16/8/18.
 */
import todoApp from './Reducers';
import {createStore} from 'redux';
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from './actions/Action';

let store = createStore(todoApp);

function TestRedux() {
	console.log(store.getState());

// 每次state变化都会触发一次事件,被subscribe监听
// 把subscribe保存给unsubscribe,最后调用`unsubscribe()`,会取消监听
	let unsubscribe = store.subscribe(() =>
		console.log(store.getState())
	);

// Dispatch some actions
	store.dispatch(addTodo('Learn about actions'));
//	store.dispatch(addTodo('Learn about reducers'));
//	store.dispatch(addTodo('Learn about store'));
	//store.dispatch(toggleTodo(0));
	//store.dispatch(toggleTodo(1));
//	store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
	unsubscribe();
}


//export default TestRedux;


