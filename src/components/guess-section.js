import React from 'react';

export default function GuessSection(props) {	
	return (
			<div>
				<h3>Guess# {props.guessCount}</h3>
				<h3>{props.feedback}</h3>
			</div>

		)
	
}