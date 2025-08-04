import React from 'react';

import { WORDS } from '../../data';
import { isGameOver } from '../../game-helpers';
import { sample } from '../../utils';
import End from "../End";
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

  const isOver = isGameOver({guessedWords: guessedWords.map(item => item.value), answer: answer})
  console.log(isOver)

  return (
    <>
      <GuessesOutput>
        {guessedWords.map(guessedWord => (
          <Guess key={guessedWord.id} word={guessedWord.value} answer={answer} />
        ))}
      </GuessesOutput>
      <GuessInput submitNewGuess={guessWord} disabled={isOver}/>
      { isOver && <End />}
    </>
  )
}

export default Game;
