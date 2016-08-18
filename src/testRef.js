import React from 'react';
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link, browserHistory} from 'react-router';

class TestRef extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange() {
		console.log(this.refs.myInput.value); // correct
	//console.log(this.refs.myInput.getValue()); //wrong
		console.log(this.refs.textFieldInput);//undefined
		console.log(this.refs.textFieldInput.getValue()); //correct
		console.log(window.getComputedStyle(this.refs.textFieldInput).height);

	}

	handleClick(){
		browserHistory.push('/input');
	}


	render() {
		return (<div>
				<input type="text" ref="myInput" onChange={this.handleChange}/>
				<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
					<TextField id='1111' ref="textFieldInput" onChange={this.handleChange}/>
				</MuiThemeProvider>
				<div onClick={this.handleClick}>link to test input page by browserHistory</div>
				<div><Link to="/input">link to test input page by Link</Link></div>
			</div>
		);
	}
}

export default TestRef;
