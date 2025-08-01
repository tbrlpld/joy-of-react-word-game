import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessesOutput from "../GuessesOutput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

class Guess {
  constructor({id, word}) {
    this.id = id
    this.word = word
  }
}

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function guessWord(word) {
    const newGuess = new Guess({id: crypto.randomUUID(), word: word})
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)
  }

  return <>
      <GuessesOutput guesses={guesses} answer={answer}/>
      <GuessInput submitNewGuess={guessWord} />
    </>
}

export default Game;
