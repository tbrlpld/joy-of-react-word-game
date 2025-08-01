import React from 'react';

import { WORDS } from '../../data';
import {checkGuess} from "../../game-helpers";
import { sample } from '../../utils';
import GuessInput from "../GuessInput";
import GuessesOutput from "../GuessesOutput";
import guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

class GuessedWord {
  constructor({id, word}) {
    this.id = id || crypto.randomUUID()
    this.value = word
  }
}

class CheckedGuess {
  constructor({ id, word }) {
    this.id = id || crypto.randomUUID()
    this.checkedLetters = checkGuess( {guess: word, answer: answer})
  }
}

function Game() {
  const [guessedWords, setGuessedWords] = React.useState([])

  function guessWord(word) {
    const nextGuessedWord = new GuessedWord({word: word})
    setGuessedWords([...guessedWords, nextGuessedWord])
  }

  const checkedGuesses = guessedWords.map(guessedWord => {
      return new CheckedGuess({id: guessedWord.id, word: guessedWord.value})
    }
  )

  return <>
      <GuessesOutput guesses={checkedGuesses} />
      <GuessInput submitNewGuess={guessWord} />
    </>
}

export default Game;
