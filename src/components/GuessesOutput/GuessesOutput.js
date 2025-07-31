import React from 'react';

import {range} from "../../utils";
import * as constants from "../../constants"


function GuessesOutput({guesses}) {

  const rows = range(constants.NUM_OF_GUESSES_ALLOWED).map(index =>
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  )

  return (
    <div className="guess-results">
      {guesses.map(guess => <p key={guess.id} className="guess">{guess.word}</p>)}
      {rows}
    </div>
  )
}

export default GuessesOutput;
