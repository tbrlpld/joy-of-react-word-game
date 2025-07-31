import React from 'react';

import {range} from "../../utils";


function Guess({word}) {
  const letters = word.split("")
  const cells = range(5).map(index => {
    const letter = letters[index] || ""
    return (
      <span key={index} className="cell">{letter}</span>
    )
  })

  return (
    <p className="guess">
      {cells}
    </p>
  )
}

export default Guess;
