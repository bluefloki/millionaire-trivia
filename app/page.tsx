"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import AnswersCard from "@/components/AnswersCard";
import { shuffleArray } from "@/lib/helpers";
import GameEnded from "@/components/GameEnded";
import Header from "@/components/Header";
import ActionButtons from "@/components/ActionButtons";

export default function Home() {
  // state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [question, setQuestion] = useState<string>("");
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const answers = useMemo(
    () => shuffleArray([correctAnswer, ...incorrectAnswers]),
    [correctAnswer]
  );
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [gameEnded, setGameEnded] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  // functions
  // function that fetches questions and their answers
  const getQuestion = (difficulty: string) => {
    setIsLoading(() => true);
    axios
      .get(
        `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple`
      )
      .then((res) => {
        // updating state
        const data = res.data.results[0];

        console.log("Correct Answer: " + data.correct_answer);

        // setting questions and answers
        setQuestion(data.question);
        setCorrectAnswer(data.correct_answer);
        setIncorrectAnswers(data.incorrect_answers);
      });
    setIsLoading(() => false);
  };

  // function that checks the answer and progresses the game forward
  const checkAnswer = () => {
    // revealing the correct answer
    setGamePaused(true);
  };

  // function that continues game after pausing
  const continueGame = () => {
    setSelectedAnswer("");

    // setting difficulty
    if (questionNumber >= 5 && questionNumber < 8) setDifficulty("medium");
    if (questionNumber >= 9 && questionNumber <= 10) setDifficulty("hard");

    // incremeting question number
    setQuestionNumber((n) => n + 1);

    // end the game if answer is incorrect
    if (selectedAnswer !== correctAnswer) setGameEnded(true);
    // continue the game if answer is correct
    else if (selectedAnswer == correctAnswer && questionNumber < 11)
      getQuestion(difficulty);

    setGamePaused(false);
  };

  // function that restarts the game
  const restartGame = () => {
    getQuestion("easy");
    setGameEnded(false);
    setQuestionNumber(1);
  };

  useEffect(() => {
    // fetching questions and answers
    getQuestion("easy");
  }, []);

  // If loading
  if (isLoading === true || question == undefined)
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  // if the game has ended
  if (questionNumber == 11 || gameEnded) {
    return (
      <GameEnded questionNumber={questionNumber} restartGame={restartGame} />
    );
  }

  // main game
  else
    return (
      <main className="h-screen flex flex-col items-center justify-center px-8 py-6 md:p-0">
        {/* Header */}
        <Header questionNumber={questionNumber} />

        {/* Question */}
        <div className="md:w-1/2 text-xl font-medium py-4 border-t border-gray-800 mb-12">
          <ReactMarkdown>{question}</ReactMarkdown>
        </div>

        {/* Answers */}
        <div className="flex flex-col items-center w-full md:w-1/3 gap-8 mb-4">
          <AnswersCard
            array={answers}
            correctAnswer={correctAnswer}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            gamePaused={gamePaused}
          />
          {/* Action Buttons. Submit + Continue */}
          <ActionButtons
            checkAnswer={checkAnswer}
            continueGame={continueGame}
            gamePaused={gamePaused}
            selectedAnswer={selectedAnswer}
          />
        </div>
      </main>
    );
}
