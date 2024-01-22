import { PlayQuizStateType, QuizDataType } from './types';

export const updatePlayQuizState = (quizData: QuizDataType, prevState: PlayQuizStateType) => {
  return {
    ...prevState, // Spread the previous state to include all properties
    currentQuestion: quizData?.quiz?.questions[prevState.index],
    showAnswer: prevState.answeredQuestions.includes(prevState.index),
    // any other properties you want to update can go here
  };
};

export const initialPlayQuizState: PlayQuizStateType = {
  index: 0,
  value: '',
  showAnswer: false,
  userAnswers: {},
  answeredQuestions: [],
  score: 0,
};
