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


//import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import TodoApp from './ToList/components/App';
// import TodoAppReducer from './ToList/Reducers';
// import Foundation from './foundation/foundation';

import './index.less';


//let rootStore = createStore();

render(
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
			<IndexRoute component={IndexRoutePageContainer}/>
			{/*<Route path="ref" component={TestRef}/>*/}
			{/*<Route path="input" component={TestInput}/>*/}
			{/*<Route path="todolist" component={TodoApp}/>*/}
			{/*<Route path="foundation" component={Foundation}/>*/}
			{/*<Route path='css' component={CssSelector}/>*/}
			<Route path="css"></Route>
		</Route>
	</Router>, document.querySelector("#app"));
