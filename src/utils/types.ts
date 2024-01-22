export enum SceneEnum {
  HOME = 'home',
  OPTIONS = 'options',
  LOADING = 'loading',
  PLAY = 'play',
  END = 'end',
}

export interface QuizInputType {
  topic: string;
  type?: string;
  questionAmount?: string;
  difficulty?: string;
}

export interface OptionsDataType {
  options: OptionType[];
}

export interface OptionType {
  title: string;
  alternatives: string[];
}

export interface QuizDataType {
  quiz: {
    title: string;
    questions: QuestionType[];
  };
}

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

export type PlayQuizStateType = {
  index: number;
  currentQuestion?: QuizDataType['quiz']['questions'][number];
  value: string;
  showAnswer: boolean;
  userAnswers: { [key: number]: string };
  answeredQuestions: number[];
  score: number;
};
