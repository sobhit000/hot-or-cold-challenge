import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';

export class GuessForm extends React.Component {
	onSubmit(event) {
		event.preventDefault();		
		const value = this.input.value;
		this.props.dispatch(makeGuess(value));
		this.input.value='';		
	}
	render () {
		return (
			<form className="guess-form" onSubmit={e => this.onSubmit(e)}>
                <input type="number" ref={input => (this.input = input)}/>
                <button type="submit">Guess</button>                
            </form>

		)
	}
	
}

export default connect ()(GuessForm);