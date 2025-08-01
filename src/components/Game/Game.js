import React from 'react';

import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessInput from "../GuessInput";
import GuessesOutput from "../GuessesOutput";
import Guess from "../Guess";
import { GuessedWord } from './Game.models';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setGuessedWords] = React.useState([])

  function guessWord(word) {
    const nextGuessedWord = new GuessedWord({word: word})
    setGuessedWords([...guessedWords, nextGuessedWord])
  }

  return (
    <>
      <GuessesOutput>
        {guessedWords.map(guessedWord => (
          <Guess key={guessedWord.id} word={guessedWord.value} answer={answer} />
        ))}
      </GuessesOutput>
      <GuessInput submitNewGuess={guessWord} />
    </>
  )
}

export default Game;
