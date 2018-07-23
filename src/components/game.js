import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import TopNav from './top-nav';
import GuessForm from './guess-form';
import PastGuesses from './past-guesses';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {guesses:[],feedback:'',correctAnswer: Math.round(Math.random() * 100) + 1}
  }

  restartGame () {
    this.setState = {guesses:[],feedback:'',correctAnswer: Math.round(Math.random() * 100) + 1}
  }

  makeGuess(guess){
    guess = parseInt(guess, 10);
    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({feedback, guesses: [...this.state.guesses, guess]});    
  }

  render(){    
    const {feedback, guesses} = this.state;
    const guessCount = guesses.length;
    return (
        <div>
          <TopNav onRestartGame={() => this.restartGame()} />
          <Header />
          <GuessSection feedback={feedback} guessCount={guessCount} />
          <GuessForm onMakeGuess={guess => this.makeGuess(guess)} />
          <PastGuesses guesses={guesses} />          
        </div> 

      )
  }
}