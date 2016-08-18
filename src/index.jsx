import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import  {render}  from 'react-dom';
import Test from './Test';
import TestImmutable from './TestImmutable';
import TestRef from './testRef';
import TestInput from './TestInput';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

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
				<div className="top-nav">我是测试首页,假装自己是头部导航栏</div>
				<div className="left-nav">
					假装自己是左侧导航栏
				</div>
				{this.props.children}
			</div>);
	}
}

render(
	(<Router history={browserHistory}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	), document.querySelector("#app"));
