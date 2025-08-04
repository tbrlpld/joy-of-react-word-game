import React from 'react';
import { checkGuess } from '../../game-helpers'

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

const ALLOWED_TRANSITONS = {
  "unused": ["incorrect", "misplaced", "correct"],
  // When there are multiple occurrences, there can be a correct one and a incorrect one.
  // If the correct ones position is after the incorrect one, we might find the incorrect one first.
  // Thus, we need to allow to upgrade from first one we found (incorrect) to second one (correct).
  "incorrect": ["correct"],
  "misplaced": ["correct"],
  "correct": [],
}

function getInitialKeyStates() {
  const states = {}
  keys.forEach(row => {
    row.forEach(key => {
      states[key] = "unused"
    })
  })
  return states
}

function Keyboard({words, answer}) {
  const keyStates= getInitialKeyStates()

  words.forEach(word => {
    const checkedGuess  = checkGuess({guess: word, answer: answer})
    checkedGuess.forEach(checkedLetter => {
      const letter = checkedLetter.letter
      const currentStatus = keyStates[letter]
      const potentialNextStatus = checkedLetter.status
      const allowedTransitions = ALLOWED_TRANSITONS[currentStatus]
      if (allowedTransitions.includes(potentialNextStatus)) {
        keyStates[letter] = potentialNextStatus
      }
    })
  })

  return (
    <div className="keyboard">
      {
        keys.map((row, index) => {
          return (
            // The rows don't change, so it's ok to used index here.
            <div key={index} className="keyboard__row">
              {row.map(key => {
                return <div key={key} className={`keyboard__key ${keyStates[key]}`}>{key}</div>
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default Keyboard;
