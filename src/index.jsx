//import bootstrap from 'bootstrap';
import React from 'react';
import  {render}  from 'react-dom';
// import TestRef from './testRef';
// import CssSelector from './foundation/css/CssSelector';
// import TestInput from './TestInput';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import './foundation/test/test';

//pageContainer
import AppContainer from './container/AppContainer';
import IndexRoutePageContainer from './container/IndexRoutePage/IndexRoutePageContainer';
import CssContainer from './container/Css/CssContainer';

import Transaction from './component/Css/Transition/Transition';
import Animation from './component/Css/Animation/Animation';

//import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import TodoApp from './ToList/components/App';
// import TodoAppReducer from './ToList/Reducers';
// import Foundation from './foundation/foundation';

import './index.less';


//let rootStore = createStore();

/**
 * todo : 调查为什么不能直接url访问,会包链接错误
 * */

render(
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
			<IndexRoute component={IndexRoutePageContainer}/>
			<Route path="css" component={CssContainer}>
				<IndexRoute component={Transaction}/>
				<Route path='transition' component={Transaction}/>
				<Route path='animation' component={Animation}/>
			</Route>
		</Route>
	</Router>, document.querySelector("#app"));


// render(
// 	<Router history={browserHistory}>
// 		<Route path="/" component={AppContainer}>
// 			<IndexRoute component={IndexRoutePageContainer}/>
// 			{/*<Route path="ref" component={TestRef}/>*/}
// 			{/*<Route path="input" component={TestInput}/>*/}
// 			{/*<Route path="todolist" component={TodoApp}/>*/}
// 			{/*<Route path="foundation" component={Foundation}/>*/}
// 			{/*<Route path='css' component={CssSelector}/>*/}
// 			<Route path="css" component={CssContainer}/>
// 		</Route>
// 	</Router>, document.querySelector("#app"));
