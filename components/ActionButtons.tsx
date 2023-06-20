import classNames from "classnames";
import React from "react";

type Props = {
  gamePaused: boolean;
  checkAnswer: () => any;
  selectedAnswer: string;
  continueGame: () => any;
};

export default function ActionButtons({
  gamePaused,
  checkAnswer,
  selectedAnswer,
  continueGame,
}: Props) {
  return (
    <>
      {gamePaused === false ? (
        <button
          disabled={selectedAnswer == ""}
          onClick={checkAnswer}
          className={classNames(
            "btn w-full border-2 btn-primary disabled:invisible"
          )}
        >
          Submit
        </button>
      ) : (
        // Continue Button when game = paused
        <button
          disabled={selectedAnswer == ""}
          onClick={continueGame}
          className={classNames(
            "btn w-full border-2 btn-primary disabled:invisible"
          )}
        >
          Continue
        </button>
      )}
    </>
  );
}
