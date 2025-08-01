import React from 'react';

import { WORDS } from '../../data';
import {checkGuess} from "../../game-helpers";
import { sample } from '../../utils';
import GuessInput from "../GuessInput";
import GuessesOutput from "../GuessesOutput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

/**
 * Create a guess from a word.
 *
 * Checks the guess against the answer and holds the letters with their status.
 * A letters status can be "incorrect", "misplaced" or "correct".
 */
class Guess {
  constructor({word}) {
    this.id = crypto.randomUUID()
    this.checkedLetters = checkGuess(word, answer)
  }
}

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function guessWord(word) {
    const newGuess = new Guess({word: word})
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)
  }

  return <>
      <GuessesOutput guesses={guesses} />
      <GuessInput submitNewGuess={guessWord} />
    </>
}

export default Game;
