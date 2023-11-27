import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { GAME_STATUS } from "../../constants";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(GAME_STATUS.RUNNING);
  console.info({ answer });

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    if (guesses.length === 5) {
      setGameResult(GAME_STATUS.LOST);
    }
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameResult(GAME_STATUS.RUNNING);
  }

  return (
    <>
      {gameResult === GAME_STATUS.WIN && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
          </p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
      {gameResult === GAME_STATUS.LOST && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={restartGame}>Restart</button>
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
