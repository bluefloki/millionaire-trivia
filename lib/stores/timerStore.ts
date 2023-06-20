import { create } from "zustand";
type TimerState = {
  timeLeft: number;
  setTimeLeft: (time: number) => void;
  decrementTime: () => void;
};

const useTimerStore = create<TimerState>((set) => ({
  timeLeft: 30,
  setTimeLeft: (time: number) => set({ timeLeft: time }),
  decrementTime: () => set((state) => ({ timeLeft: state.timeLeft - 1 })),
}));

export default useTimerStore;
