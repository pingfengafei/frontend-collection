/**
 * Created by pingfengafei on 16/8/15.
 */
import React from 'react';
import Immutable from 'immutable';
import './index.less';

//let a = Immutable.fromJS({a: 1, b: 2, c: {name: 'hello', value: 'world'}});
//let user = Immutable.Map({name: '1', age: '2', info: {gender: 'male', height: '3'}});

//let userCopy = user;

class TestImmutable extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		console.log(userCopy.get('name'));
		console.log(userCopy.get('info'));
		var c = userCopy.set('info', 2); //返回c,其中info==2,但是userCopy是不会变的
		console.log(c);
		return null;
	}

}

export default TestImmutable;

