import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import { Guess } from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
let guessCount = 0;

function Game() {
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill("     ")
  );

  const addNewGuess = (guess) => {
    const previousGuessesNext = [...guesses];
    previousGuessesNext[guessCount] = guess;
    guessCount++;
    setGuesses(previousGuessesNext);
    console.log(guessCount);
  };
  return (
    <>
      <Guess guesses={guesses} />
      <GuessInput addNewGuess={addNewGuess} />
    </>
  );
}

export default Game;
