/**
 * Created by pingfengafei on 16/10/31.
 */

import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import Basic from '../../component/Css/Basic/Basic';
import Animation from '../../component/Css/Animation/Animation';
import Transition from '../../component/Css/Transition/Transition';
import './index.less';

class CssIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {type: ''};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(type) {
		hashHistory.push(type);
		this.setState({type: type});
	}

	render() {
		let content = <Basic />;
		if (this.state.type === 'transition') {
			content = <Transition />;
		}
		if (this.state.type === 'animation') {
			content = <Animation />;
		}

		return (
			<div className="css-index-page-wrap">
				<div className="css-nav">
					<span className="css3-basic" onClick={this.handleClick.bind(null, 'basic')}>basic</span>
					<span className="transition" onClick={this.handleClick.bind(null, 'transition')}>transition</span>
					<span className="animation" onClick={this.handleClick.bind(null, 'animation')}>animation</span>
				</div>
				{content}
			</div>
		);
	}
}

export default CssIndexPage;
