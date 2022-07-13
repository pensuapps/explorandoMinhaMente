import { useEffect, useState } from "react";
import { anxietyQuestions } from "../data/questions";

export function useAnxietyQuestions() {
  const questionary = anxietyQuestions.questions;
  let [currentIndex, setCurrentIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const isLastQuestionaryQuestion = (questionIndex) =>
    questionIndex + 1 === questionary.length;

  useEffect(() => {
    if (currentIndex + 1 === anxietyQuestions.questions.length) {
      setIsLastQuestion(true);
    }
  }, [currentIndex]);

  const incrementCurrentIndex = () => {
    !isLastQuestionaryQuestion(currentIndex) && setCurrentIndex(++currentIndex);
  };
  const currentQuestion = questionary[currentIndex];

  return {
    questionary,
    isLastQuestion,
    currentIndex,
    incrementCurrentIndex,
    currentQuestion,
  };
}
