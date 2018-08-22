import React from 'react';
import {connect} from 'react-redux';

export function PastGuesses(props){
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

const mapStateToProps = state => ({
	guesses: state.guesses
});

export default connect(mapStateToProps)(PastGuesses);