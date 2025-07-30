import React from 'react';

class Guess {
  constructor({id, word}) {
    this.id = id
    this.word = word
  }
}

function GuessesOutput() {
  const guesses = [
    new Guess({id: crypto.randomUUID(), word: "hello"}),
    new Guess({id: crypto.randomUUID(), word: "there"}),
    new Guess({id: crypto.randomUUID(), word: "world"}),
  ]

  return (
    <div className="guess-results">
      {guesses.map(guess => <p key={guess.id} className="guess">{guess.word}</p>)}
    </div>
  )
}

export default GuessesOutput;
