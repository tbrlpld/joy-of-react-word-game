import {checkGuess} from "./game-helpers";

class GuessedWord {
  constructor({id, word}) {
    this.id = id || crypto.randomUUID()
    this.value = word
  }
}

class CheckedGuess {
  constructor({ id, guess, answer }) {
    this.id = id || crypto.randomUUID()
    this.checkedLetters = checkGuess({guess: guess, answer: answer})
  }
}

export {
  GuessedWord,
  CheckedGuess,
}
