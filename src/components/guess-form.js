import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
	onSubmit(event) {
		event.preventDefault();		
		const value = this.input.value;
		this.props.onMakeGuess(value);
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