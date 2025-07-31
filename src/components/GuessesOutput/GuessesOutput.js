import React from 'react';

import Guess from "../Guess";
import {range} from "../../utils";
import * as constants from "../../constants"


function GuessesOutput({guesses}) {

  const rows = range(constants.NUM_OF_GUESSES_ALLOWED).map(index => {
    const guess = guesses[index] || {id: index, word: ""}
    console.log(guess)
    return (
      <Guess
        key={guess.id}
        word={guess.word}
      />
    )
  });

  return (
    <div className="guess-results">
      {rows}
    </div>
  )
}

export default GuessesOutput;
