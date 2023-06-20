"use client";

import { formatTime } from "@/lib/helpers";
import useTimerStore from "@/lib/stores/timerStore";
import React, { useEffect } from "react";

export default function Timer() {
  // state
  const { timeLeft } = useTimerStore();

  return (
    <div className="text-lg md:text-xl gradient-text text-center absolute w-full">
      Time Left: {formatTime(timeLeft)}s
    </div>
  );
}
