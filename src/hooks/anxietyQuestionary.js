import { useState } from "react";
import { anxietyQuestions } from "../data/questions";

export function useAnxietyQuestions() {
  const questionary = anxietyQuestions.questions;

  let [currentIndex, setCurrentIndex] = useState(0);
  
  const lastQuestionaryQuestion = (questionIndex) => questionIndex === questionary.length
  const isLastQuestion = lastQuestionaryQuestion()

  const incrementCurrentIndex = () => setCurrentIndex(++currentIndex)
  const currentQuestion = questionary[currentIndex]

  return {
    questionary,
    isLastQuestion,
    currentIndex,
    incrementCurrentIndex,
    currentQuestion
  };
}
