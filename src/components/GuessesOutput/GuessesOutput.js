import React from 'react';

import Guess from "../Guess";
import {range} from "../../utils";
import * as constants from "../../constants"


function GuessesOutput({guesses}) {
  const rows = range(constants.NUM_OF_GUESSES_ALLOWED).map(num => {
    // If we have an existing guess for the row index, use that.
    // Otherwise create a dummy.
    const guess = guesses[num] || {id: num, checkedLetters: []}
    return (
      <Guess
        key={guess.id}
        checkedLetters={guess.checkedLetters}
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
