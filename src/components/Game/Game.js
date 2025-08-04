import React from 'react'

import { WORDS } from '../../data'
import { checkGuess, getGameStatus } from '../../game-helpers'
import { sample } from '../../utils'
import GuessInput from '../GuessInput'
import GuessesOutput from '../GuessesOutput'
import Guess from '../Guess'
import { GuessedWord } from './Game.models'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'
import Keyboard from '../Keyboard'

function getAnswer () {
  return sample(WORDS)
}

function Game () {
  const [answer, setAnswer] = React.useState(getAnswer)
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer })

  const [guessedWords, setGuessedWords] = React.useState([])

  function guessWord (word) {
    const nextGuessedWord = new GuessedWord({ word: word })
    setGuessedWords([...guessedWords, nextGuessedWord])
  }

  function reset () {
    const nextAnswer = getAnswer()
    setAnswer(nextAnswer)
    setGuessedWords([])
  }

  const guessElements = []
  const checkedGuesses = []
  const words = []

  guessedWords.forEach(guessedWord => {
    const checkedGuess = checkGuess({ guess: guessedWord.value, answer: answer })

    guessElements.push(
      <Guess key={guessedWord.id} checkedGuess={checkedGuess}/>
    )
    checkedGuesses.push(checkedGuess)
    words.push(guessedWord.value)
  })

  const gameStatus = getGameStatus({ words: words, answer: answer })

  return (
    <>
      <button onClick={reset}>Reset</button>

      <GuessesOutput>
        {guessElements}
      </GuessesOutput>

      <GuessInput submitNewGuess={guessWord} disabled={gameStatus !== 'playing'}/>

      {gameStatus === 'won' && <WonBanner numOfGuesses={guessedWords.length}/>}
      {gameStatus === 'lost' && <LostBanner answer={answer}/>}

      <Keyboard checkedGuesses={checkedGuesses}/>
    </>
  )
}

export default Game
