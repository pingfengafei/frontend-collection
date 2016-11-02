/**
 * Created by pingfengafei on 16/10/31.
 */
import App from '../component/App/App';
import React from 'react';

export default class AppContainer extends React.Component {
	render() {
		return <App>{this.props.children}</App>;
	}
}


