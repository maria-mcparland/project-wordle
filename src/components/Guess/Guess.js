import { range } from "../../utils";

const Guess = ({ value }) => {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={crypto.randomUUID()} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
};

export default Guess;
