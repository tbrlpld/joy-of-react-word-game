import React from 'react';

function GuessInput() {
  const [word, setWord] = React.useState("");

  function handleSubmit(event){
    event.preventDefault();
    console.log(word);
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
              setWord(event.target.value);
            }}
        />
      </form>
  )
}

export default GuessInput;
