import React from 'react';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

function Keyboard() {
  return (
    <div className="keyboard">
      {
        keys.map(row => {
          return (
            <div className="keyboard__row">
              {row.map(key => {
                return <div className="keyboard__key">{key}</div>
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default Keyboard;
