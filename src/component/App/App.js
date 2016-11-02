/**
 * Created by pingfengafei on 16/10/31.
 */
import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
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
	}
}
