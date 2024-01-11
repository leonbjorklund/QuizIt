import { QuizInputType } from '../utils/types';

export const generatePrompt = (quizInput: QuizInputType): string => {
  const { topic, questionAmount, difficulty, type } = quizInput;

  const topicLower = topic.toLowerCase();
  const questionAmountLower = questionAmount.toLowerCase();
  const difficultyLower = difficulty.toLowerCase();
  const typeLower = type.toLowerCase();

  return `${topicLower}, ${questionAmountLower}, ${difficultyLower}, ${typeLower}`;
};
