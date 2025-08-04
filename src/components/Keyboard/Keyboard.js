import React from 'react';
import { checkGuess } from '../../game-helpers'

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

class KeyStates {
  static UNUSED = "unused"
  static MISPLACED = "misplaced"
  static CORRECT = "correct"
  static INCORRECT = "incorrect"

  static ALLOWED_TRANSITONS = {
    "unused": [KeyStates.INCORRECT, KeyStates.MISPLACED, KeyStates.CORRECT],
    // When there are multiple occurrences, there can be a correct one and a incorrect one.
    // If the correct ones position is after the incorrect one, we might find the incorrect one first.
    // Thus, we need to allow to upgrade from first one we found (incorrect) to second one (correct).
    "incorrect": [KeyStates.CORRECT],
    "misplaced": [KeyStates.CORRECT],
    "correct": [],
  }

  constructor ({words, answer}) {
    keys.forEach(row => {
      row.forEach(key => {
        this[key] = KeyStates.UNUSED
      })
    })

    words.forEach(word => {
      const checkedGuess  = checkGuess({guess: word, answer: answer})
      checkedGuess.forEach(checkedLetter => {
        this.updateKeyStatus({
          key: checkedLetter.letter,
          newStatus: checkedLetter.status,
        })
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
    const allowedTransitionsForCurrentStatus = KeyStates.ALLOWED_TRANSITONS[currentStatus]
    if (allowedTransitionsForCurrentStatus.includes(newStatus)) {
      this[key] = newStatus
    }
  }
}

function Keyboard({words, answer}) {
  const keyStates = new KeyStates({words, answer})

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
