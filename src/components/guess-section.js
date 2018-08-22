import React from 'react';
import {connect} from 'react-redux';

export function GuessSection(props) {	
	return (
			<div>
				<h3>Guess# {props.guessCount}</h3>
				<h3>{props.feedback}</h3>
			</div>
		)	
}

const mapStateToProps = state => ({
	guessCount: state.guesses.length,
	feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);