import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { GAME_STATUS } from "../../constants";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer, setGameResult }) {
  const result = checkGuess(value, answer);
  const isCorrect = result?.find((r) => r.status !== "correct");
  if (
    result &&
    !result.find((e) => ["incorrect", "misplaced"].includes(e.status))
  ) {
    console.log(result);
    setGameResult(GAME_STATUS.WIN);
    /* same result as above, but a different function return type */
  }
  console.log(isCorrect);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={crypto.randomUUID()}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
