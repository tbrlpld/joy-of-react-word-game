import React from 'react';

function GuessInput({submitNewGuess}) {
  const [word, setWord] = React.useState("");

  function handleSubmit(event){
    event.preventDefault();
    console.log(word);
    submitNewGuess(word);
    setWord("");
  }

  return (
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            type="text"
            value={word}
            onChange={event => {
              setWord(event.target.value.toUpperCase());
            }}
            maxLength={5}
            pattern="[a-zA-Z]{5}"
            autoComplete="off"
        />
      </form>
  )
}

export default GuessInput;
