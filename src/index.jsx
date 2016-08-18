import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import  {render}  from 'react-dom';
import Test from './Test';
import TestImmutable from './TestImmutable';
import TestRef from './testRef';
import TestInput from './TestInput';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import TestRedux from './ToList/index';

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
		TestRedux();
		return (
			<div className="wrap">
				<div className="top-nav">我是测试首页,假装自己是头部导航栏</div>
				<div className="left-nav">
					假装自己是左侧导航栏,因为这里默认用了bootstrap,导致初次看到页面时,误以为fixed和absolute没有脱离正常文本流
				</div>
				<div className="wrap-content">
					{this.props.children}
				</div>
			</div>);
	}
}

class MainPage extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (<div>我是测试首页的indexRoute</div>);
	}
}

render(
	(<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={MainPage}/>
				<Route path="ref" component={TestRef}/>
				<Route path="input" component={TestInput}/>
			</Route>
		</Router>
	), document.querySelector("#app"));
