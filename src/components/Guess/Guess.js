export const Guess = ({ guesses }) => {
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p className="guess" key={crypto.randomUUID()}>
            {guess.split("").map((value) => (
              <span className="cell" key={crypto.randomUUID()}>
                {value}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};

// create array of num guesses minus previous
