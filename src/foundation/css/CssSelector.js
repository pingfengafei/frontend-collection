/**
 * Created by pingfengafei on 16/10/21.
 */
import React from 'react';
import './CssSelector.less';

class CssSelector extends React.Component {
	render() {
		let subClassSelector = (
			<div className="sub-class-selector">
				<div className="test">11111</div>
				<div>
					<div className="test">22222</div>
				</div>
			</div>
		);

		let descendantSelector = (
			<div className="descendant-selector">
				<div className="test">11111</div>
				<div>
					<div className="test">22222</div>
				</div>
			</div>
		);




		return (
			<div>
				<div>
					<div>子类选择器</div>
					{subClassSelector}
				</div>

				<div>
					<div>后代选择器</div>
					{descendantSelector}
				</div>

			</div>);
	}
}

export default CssSelector;
