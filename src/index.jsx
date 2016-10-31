//import bootstrap from 'bootstrap';
import React from 'react';
import  {render}  from 'react-dom';
// import TestRef from './testRef';
// import CssSelector from './foundation/css/CssSelector';
// import TestInput from './TestInput';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import './foundation/test/test';

//pageContainer
import IndexRoutePageContainer from './container/IndexRoutePage/IndexRoutePageContainer';


//import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import TodoApp from './ToList/components/App';
// import TodoAppReducer from './ToList/Reducers';
// import Foundation from './foundation/foundation';

import './index.less';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {num: 1};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({num: ++this.state.num});
	}

	render() {
		return (
			<div className="wrap">
				<div className="top-nav">我是头部</div>
				<div className="left-nav">
					左侧导航栏,因为这里默认用了bootstrap,导致初次看到页面时,误以为fixed和absolute没有脱离正常文本流
				</div>
				<div className="wrap-content">
					{this.props.children}
				</div>
			</div>);
		return <div></div>;

	}
}


//let rootStore = createStore();

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={IndexRoutePageContainer}/>
			{/*<Route path="ref" component={TestRef}/>*/}
			{/*<Route path="input" component={TestInput}/>*/}
			{/*<Route path="todolist" component={TodoApp}/>*/}
			{/*<Route path="foundation" component={Foundation}/>*/}
			{/*<Route path='css' component={CssSelector}/>*/}
			<Route path="css"></Route>
		</Route>
	</Router>, document.querySelector("#app"));
