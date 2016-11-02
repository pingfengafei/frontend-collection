/**
 * Created by pingfengafei on 16/11/1.
 */

import React, {Component} from 'react';
import './Basic.less';

class Basic extends Component {
	render() {
		return (
			<div className="basic">
				<p>CSS3基本语法页面</p>
				<div className="content-wrap">
					<div className="content">
						<div className="name">圆角</div>
						<div className="border-radius"></div>
					</div>

					<div className="content">
						<div className="name">圆:radius为宽高的一半</div>
						<div className="border-radius-circle"></div>
					</div>

					<div className="content">
						<div className="name">box-shadow: h-shadow v-shadow blur(阴影模糊半径) spread color inset(插图,内部);</div>
						<div className="box-shadow"></div>
					</div>

					<div className="content">
						<div className="name" style={{marginTop: '30px'}}>线性渐变:gradient <br/>
							Firefox : background : -moz-linear-gradient(方向,起点颜色,终点颜色) <br />
							Chrome : background : -webkit-gradient(type, left top, left bottom, color-stop(startPosition, color),
							color-stop(endPostion, color))
						</div>
						<div className="gradient">
						</div>
					</div>

					<div className="content">
						<div className="name">旋转 : rotate</div>
						<div className="rotate"></div>
					</div>

				</div>
			</div>
		);
	}
}
export default Basic;
