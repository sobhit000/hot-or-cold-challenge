import React from 'react';

export default function TopNav(props){
	return (
			<ul><li><a href="" onClick={() => props.onRestartGame()}>Restart Game</a></li></ul>
		)
}