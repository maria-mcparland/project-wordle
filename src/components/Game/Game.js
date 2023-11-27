import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { GAME_STATUS } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(GAME_STATUS.RUNNING);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    if (guesses.length === 5) {
      setGameResult(GAME_STATUS.LOST);
    }
  }

  return (
    <>
      {gameResult === GAME_STATUS.WIN && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameResult === GAME_STATUS.LOST && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameResult={setGameResult}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameResult={gameResult}
      />
    </>
  );
}

export default Game;
