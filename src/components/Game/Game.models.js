export class GuessedWord {
  constructor({id, word}) {
    this.id = id || crypto.randomUUID()
    this.value = word
  }
}
