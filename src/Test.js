/**
 * Created by pingfengafei on 16/8/15.
 */
/*
* 测试lodash,React生命周期,shouldComponentUpdate,以及props刷新是否会调用render函数
*
* */

import React from 'react';
import _ from 'lodash';

class Test extends React.Component {
	constructor() {
		super();
		console.log('111');//only once
	}

	/*
	* shouldComponentUpdate可以组织上层刷新调用props而渲染组件
	* props是对象,不能直接通过==,===比较结果
	* 自己手动写函数? 洗洗睡吧,通用的对象比较函数要写到天荒地老
	* 好在,我们有ladash!
	*/
	shouldComponentUpdate(nextProps) {
		console.log('using shouldComponentUpdate');
		console.log(nextProps);
		console.log(this.props);
		return (!_.isEqual(nextProps, this.props));
	}

	render() {
		console.log(this.props.name); //这里会渲染
		return null;
	}
}

export default Test;
