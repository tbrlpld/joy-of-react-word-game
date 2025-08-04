import React from 'react';

import { WORDS } from '../../data';
import { getGameState } from '../../game-helpers'
import { sample } from '../../utils';
import GuessInput from "../GuessInput";
import GuessesOutput from "../GuessesOutput";
import Guess from "../Guess";
import { GuessedWord } from './Game.models';
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'
import Keyboard from '../Keyboard'


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

  const words = guessedWords.map(item => item.value)
  const gameStatus = getGameState({guessedWords: words, answer: answer})

  return (
    <>
      <GuessesOutput>
        {guessedWords.map(guessedWord => (
          <Guess key={guessedWord.id} word={guessedWord.value} answer={answer} />
        ))}
      </GuessesOutput>

      <GuessInput submitNewGuess={guessWord} disabled={gameStatus !== "playing"}/>

      { gameStatus === "won" && <WonBanner numOfGuesses={guessedWords.length} />}
      { gameStatus === "lost" && <LostBanner answer={answer} /> }

      <Keyboard />
    </>
  )
}

export default Game;
