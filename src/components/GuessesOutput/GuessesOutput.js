import React from 'react';

import Guess from "../Guess";
import {range} from "../../utils";
import * as constants from "../../constants"


function GuessesOutput({children}) {
  // Pad and limit displayed children to number of allowed guesses.
  const rows = range(constants.NUM_OF_GUESSES_ALLOWED).map(num => {
    const child = children[num]

    if (child) {
      return child
    } else {
      return <Guess key={num} />
    }
  });

  return (
    <div className="guess-results">
      {rows}
    </div>
  )
}

export default GuessesOutput;
