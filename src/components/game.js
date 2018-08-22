import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import TopNav from './top-nav';
import GuessForm from './guess-form';
import PastGuesses from './past-guesses';

export default function Game(props) {
  return (
        <div>
          <TopNav />
          <Header />
          <GuessSection />
          <GuessForm />
          <PastGuesses />          
        </div>
      );
}