import React from 'react';

function Guess({word}) {
  console.log(word)
  return (
    <p className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  )
}

export default Guess;
