import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import { PreviousGuesses } from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  const addNewGuess = (guess) => {
    const newGuess = {
      guess,
      key: crypto.randomUUID(),
    };
    const previousGuessesNext = [...previousGuesses, newGuess];
    setPreviousGuesses(previousGuessesNext);
  };
  return (
    <>
      <PreviousGuesses previousGuesses={previousGuesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
