"use client";

import { dollarAmounts } from "@/lib/dollarAmounts";
import { formatNumberWithCommas } from "@/lib/helpers";
import React from "react";

type Props = {
  questionNumber: number;
  restartGame: () => any;
};

export default function GameEnded({ questionNumber, restartGame }: Props) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-8 py-6 md:p-o">
      <p className="text-2xl font-semibold mb-8">
        The game has ended. You have won{" "}
        <span className="gradient-text">
          $
          {`${
            questionNumber == 11
              ? formatNumberWithCommas("1000000")
              : formatNumberWithCommas(dollarAmounts[questionNumber - 2])
          }`}
        </span>
      </p>
      <button className="btn btn-primary" onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
}
