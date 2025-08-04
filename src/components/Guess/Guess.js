import React from 'react';

import {range} from "../../utils";


function Guess({checkedGuess}) {
  checkedGuess = checkedGuess || []

  const cells = range(5).map(num => {
    // Check if we have a letter for the index. Create dummy if not.
    // This should only be empty when the whole row is empty.
    const checkedLetter = checkedGuess[num] || {letter: "", status: ""}

    return (
      // We are ok to use the index here, because the letters won't be reordered.
      <span
        key={num}
        className={`cell ${checkedLetter.status}`}
      >{checkedLetter.letter}</span>
    )
  })

  return (
    <p className="guess">
      {cells}
    </p>
  )
}

export default Guess;
