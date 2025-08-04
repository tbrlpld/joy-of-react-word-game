import React from 'react';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

class KeyState {
  constructor({letter}){
    this.letter = letter
    this.state = "unused"
  }
}

function getInitialKeyStates() {
  const states = {}
  keys.forEach(row => {
    row.forEach(key => {
      states[key] = new KeyState({letter: key})
    })
  })
  return states
}

function Keyboard() {
  const [keyStates, setKeyStates] = React.useState(getInitialKeyStates)

  console.log(keyStates)

  return (
    <div className="keyboard">
      {
        keys.map((row, index) => {
          return (
            // The rows don't change, so it's ok to used index here.
            <div key={index} className="keyboard__row">
              {row.map(key => {
                return <div key={key} className="keyboard__key">{key}</div>
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default Keyboard;
