/**
 * Created by pingfengafei on 16/8/23.
 */
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions/Action';
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink;
