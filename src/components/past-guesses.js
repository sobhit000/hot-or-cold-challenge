import React from 'react';

export default function PastGuesses(props){
	const guesses = props.guesses.map((guess, index) => (
	    <li key={index}>
	      {guess}
	    </li>
	));
	
	return (
			<div className="guess-box">
				<h4>Your recent guesses</h4>
				<ul>{guesses}</ul>
			</div>
		);
}