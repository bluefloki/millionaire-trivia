import { dollarAmounts } from "@/lib/dollarAmounts";
import { formatNumberWithCommas } from "@/lib/helpers";
import React from "react";

type Props = {
  questionNumber: number;
};

export default function Header({ questionNumber }: Props) {
  return (
    <div className="flex flex-row items-center justify-between w-full md:w-1/2">
      <h2 className="text-left font-semibold text-2xl md:text-3xl text-[#98A2C8] py-4">
        {`Question ${questionNumber} / 10`}
      </h2>
      <p className="text-xl md:text-2xl font-semibold text-center gradient-text">
        ${`${formatNumberWithCommas(dollarAmounts[questionNumber])}`}
      </p>
    </div>
  );
}
