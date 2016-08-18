/**
 * Created by pingfengafei on 16/8/17.
 */
/**
 * Created by pingfengafei on 16/8/15.
 */
/*
 * 测试lodash,React生命周期,shouldComponentUpdate,以及props刷新是否会调用render函数
 *
 * */

import React from 'react';
import _ from 'lodash';

class TestInput extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		//console.log('click');
		let name = e.target.dataset.name;
		console.log(name);
	}

	render() {
		//radio需要用name控制单选,name不同时,不视为单选
		return (<div>
				<form action="">
					<input type="checkbox"  onClick={this.handleClick} data-name="checkbox1" /> checkbox1<br />
					<input type="checkbox" checked = {true} onClick={this.handleClick} data-name="checkbox2" />checkbox2 <br />
					<input type="checkbox" onClick={this.handleClick} data-name="checkbox3"/>checkbox3 <br />
				</form>

				<form action="">
					<input type="radio" name="radio" onClick={this.handleClick} data-name="radio1"/>radio1<br />
					<input type="radio" name="radio" onClick={this.handleClick} data-name="radio2"/>radio2 <br />
					<input type="radio" name="radio1" onClick={this.handleClick} data-name="radio3"/>radio3<br />
				</form>
				<form action="">
					<input type="text" onClick={this.handleClick} data-name="input"/>
				</form>
				<select name="" id="">
					<option value="">1</option>
					<option value="">2</option>
					<option value="">3</option>
				</select>
			</div>
		);
	}
}

export default TestInput;
