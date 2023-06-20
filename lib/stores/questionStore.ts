import { create } from "zustand";

const useQuestionStore = create((set) => ({
  answers: {
    correctAnswer: "",
    incorrectAnswers: [],
  },
}));
