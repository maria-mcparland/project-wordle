export const PreviousGuesses = ({ previousGuesses }) => {
  return (
    <div className="guess-results">
      {previousGuesses.map(({ guess, key }) => {
        return (
          <p className="guess" key={key}>
            {guess}
          </p>
        );
      })}
    </div>
  );
};
