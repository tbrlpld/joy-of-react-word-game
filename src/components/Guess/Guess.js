import React from 'react';

import {checkGuess} from "../../game-helpers";
import {range} from "../../utils";


function Guess({word, answer}) {
  let checkedLetters
  if (!word && !answer){
    checkedLetters = []
  } else if (word && answer) {
    checkedLetters = checkGuess({guess: word.toUpperCase(), answer: answer.toUpperCase()})
  } else {
    console.error("Word and answer need to be specified in conjunction.")
  }

  const cells = range(5).map(num => {
    // Check if we have a letter for the index. Create dummy if not.
    // This should only be empty when the whole row is empty.
    const checkedLetter = checkedLetters[num] || {letter: "", status: ""}

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
