import React from 'react';

import {range} from "../../utils";


function Guess({checkedLetters}) {
  const cells = range(5).map(num => {
    const checkedLetter = checkedLetters[num] || {letter: "", status: ""}
    return (
      // We are ok to use the index here, because the letters won't be reordered.
      <span key={num} className={`cell ${checkedLetter.status}`}>{checkedLetter.letter}</span>
    )
  })

  return (
    <p className="guess">
      {cells}
    </p>
  )
}

export default Guess;
