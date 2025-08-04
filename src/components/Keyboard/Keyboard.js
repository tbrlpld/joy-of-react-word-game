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

class KeyStates {
  constructor () {
    keys.forEach(row => {
      row.forEach(key => {
        this[key] = "unused"
      })
    })
  }

  /**
   * Update status for key.
   *
   * Will only perform update if it is a valid transition.
   * Other transitions are ignored.
   *
   * @param {string} key The key to update the status for.
   * @param {string} newStatus The new status that should be stored for the key.
   */
  updateKeyStatus({key, newStatus}) {
    const currentStatus = this[key]
    const allowedTransitionsForCurrentStatus = ALLOWED_TRANSITONS[currentStatus]
    if (allowedTransitionsForCurrentStatus.includes(newStatus)) {
      this[key] = newStatus
    }
  }
}

function Keyboard({words, answer}) {
  const keyStates= new KeyStates()

  words.forEach(word => {
    const checkedGuess  = checkGuess({guess: word, answer: answer})
    checkedGuess.forEach(checkedLetter => {
      keyStates.updateKeyStatus({
        key: checkedLetter.letter,
        newStatus: checkedLetter.status,
      })
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
