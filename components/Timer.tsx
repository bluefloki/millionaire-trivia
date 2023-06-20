"use client";

import { formatTime } from "@/lib/helpers";
import useTimerStore from "@/lib/stores/timerStore";
import React, { useEffect } from "react";

export default function Timer() {
  // state
  const { timeLeft } = useTimerStore();

  return <div>Timer: {formatTime(timeLeft)}</div>;
}
