import { QuizData } from './types';

export type PlayQuizState = {
  index: number;
  currentQuestion?: QuizData['quiz']['questions'][number];
  value: string;
  showAnswer: boolean;
  userAnswers: { [key: number]: string };
  answeredQuestions: number[];
  score: number;
};

export const updatePlayQuizState = (quizData: QuizData, prevState: PlayQuizState) => {
  return {
    ...prevState, // Spread the previous state to include all properties
    currentQuestion: quizData?.quiz?.questions[prevState.index],
    showAnswer: prevState.answeredQuestions.includes(prevState.index),
    // any other properties you want to update can go here
  };
};

export const initialPlayQuizState: PlayQuizState = {
  index: 0,
  value: '',
  showAnswer: false,
  userAnswers: {},
  answeredQuestions: [],
  score: 0,
};
