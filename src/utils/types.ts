export interface QuizDataType {
  quiz: {
    title: string;
    questions: QuestionType[];
  };
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

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

export enum Scene {
  HOME = 'home',
  OPTIONS = 'options',
  LOADING = 'loading',
  PLAY = 'play',
  END = 'end',
}

export enum NavigateQuestion {
  NEXT = 'next',
  PREV = 'previous',
}

export interface OptionsDataType {
  options: OptionType[];
}

export interface OptionType {
  title: string;
  alternatives: string[];
}

export interface QuizInputType {
  topic: string;
  type?: string; // Optional property
  questionAmount?: string; // Optional property
  difficulty?: string; // Optional property
}
