import React from 'react';

import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";


function Guess({word, answer}) {
  let checkedLetters = []
  if (word) {
    checkedLetters = checkGuess(word, answer)
  }

  const cells = range(5).map(index => {
    const checkedLetter = checkedLetters[index]
    let letter = ""
    let status = null
    if (checkedLetter) {
      letter = checkedLetter.letter
      status = checkedLetter.status
    }
    return (
      // We are ok to use the index here, because the letters won't be reordered.
      <span key={index} className={`cell ${status}`}>{letter}</span>
    )
  })

  return (
    <p className="guess">
      {cells}
    </p>
  )
}

export default Guess;
