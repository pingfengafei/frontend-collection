import React from 'react';
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class TestRef extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		console.log(this.refs.myInput.value); // correct
	//console.log(this.refs.myInput.getValue()); //wrong
		console.log(this.refs.textFieldInput);//undefined
		console.log(window.getComputedStyle(this.refs.textFieldInput).height);
		console.log(this.refs.textFieldInput.getValue()); //correct
	}

	render() {
		return (<div>
				<input type="text" ref="myInput" onChange={this.handleChange}/>
				<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
					<TextField id='1111' ref="textFieldInput" onChange={this.handleChange}/>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default TestRef;
