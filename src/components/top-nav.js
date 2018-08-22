import React from 'react';
import {connect} from 'react-redux'
import {restartGame} from '../actions';


export function TopNav(props){
	return (
			<ul><li><a href="" onClick={() => props.dispatch(restartGame(Math.floor(Math.random() * 100) + 1))}>Restart Game</a></li></ul>
		)
}

export default connect()(TopNav);