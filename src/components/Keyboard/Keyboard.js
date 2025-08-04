import React from 'react';
import { checkGuess } from '../../game-helpers'

const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];


class KeyState {
  #value

  static #allowedTransitions = {
    "unused": ["incorrect", "misplaced", "correct"],
    "incorrect": [],
    "misplaced": ["correct"],
    "correct": [],
  }

  constructor () {
    this.#value = "unused"
  }

  get value() {
    return this.#value
  }

  set value(newValue) {
    if (newValue === this.#value) {return}

    if (KeyState.#allowedTransitions[this.#value].includes(newValue)) {
      this.#value = newValue
    } else {
      throw Error("Transition not allowed", this.#value, newValue)
    }
  }
}

function getInitialKeyStates() {
  const states = {}
  keys.forEach(row => {
    row.forEach(key => {
      states[key] = new KeyState()
    })
  })
  return states
}

function Keyboard({words, answer}) {
  const keyStates= getInitialKeyStates()

  words.forEach(word => {
    const checkedGuess  = checkGuess({guess: word, answer: answer})
    checkedGuess.forEach(checkedLetter => {
      keyStates[checkedLetter.letter].value = checkedLetter.status
    })
  })

  console.log({keyStates})

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
