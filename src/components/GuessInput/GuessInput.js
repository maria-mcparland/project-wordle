import React from "react";

const GuessInput = ({ addNewGuess }) => {
  const [userGuess, setUserGuess] = React.useState("");

  const submitGuess = (event) => {
    event.preventDefault();
    addNewGuess(userGuess);
    console.info(userGuess);
    setUserGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={userGuess}
        onChange={(event) => setUserGuess(event.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
};

export default GuessInput;
