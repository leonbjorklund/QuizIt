import { QuizInputType } from "../utils/types";

export const generatePrompt = (quizInput: QuizInputType): string => {
  const { topic, questionAmount, difficulty, type } = quizInput;
  return `${topic}, ${questionAmount}, ${difficulty}, ${type}`;
};


