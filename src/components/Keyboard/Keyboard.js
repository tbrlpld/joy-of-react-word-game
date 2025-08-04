import React from 'react'

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

class KeyStates {
  static UNUSED = 'unused'
  static MISPLACED = 'misplaced'
  static CORRECT = 'correct'
  static INCORRECT = 'incorrect'

  static ALLOWED_TRANSITONS = {
    'unused': [KeyStates.INCORRECT, KeyStates.MISPLACED, KeyStates.CORRECT],
    // When there are multiple occurrences, there can be a correct one and a incorrect one.
    // If the correct ones position is after the incorrect one, we might find the incorrect one first.
    // Thus, we need to allow to upgrade from first one we found (incorrect) to second one (correct).
    'incorrect': [KeyStates.CORRECT],
    'misplaced': [KeyStates.CORRECT],
    'correct': [],
  }

  constructor ({ checkedGuesses }) {
    this.#setInitialStates()
    this.#updateStates({ checkedGuesses: checkedGuesses })
  }

  #setInitialStates () {
    keys.forEach(row => {
      row.forEach(key => {
        this[key] = KeyStates.UNUSED
      })
    })
  }

  #updateStates ({ checkedGuesses }) {
    checkedGuesses.forEach(checkedGuess => {
      checkedGuess.forEach(checkedLetter => {
        const key = checkedLetter.letter
        this[key] = KeyStates.getNextStatus({ current: this[key], candidate: checkedLetter.status })
      })
    })
  }

  /**
   * Get the next status from the current and a candidate.
   *
   * Returns the candidate if a valid choice. Otherwise, returns the current status if no change should occur.
   *
   * @param current
   * @param candidate
   * @returns {*}
   */
  static getNextStatus ({ current, candidate }) {
    const allowedTransitionsForCurrentStatus = KeyStates.ALLOWED_TRANSITONS[current]
    if (allowedTransitionsForCurrentStatus.includes(candidate)) {
      return candidate
    } else {
      return current
    }
  }
}

function Keyboard ({ checkedGuesses }) {
  const keyStates = new KeyStates({ checkedGuesses })

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
  )
}

export default Keyboard
