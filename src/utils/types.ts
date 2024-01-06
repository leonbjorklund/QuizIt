export interface QuizData {
  quiz: {
    title: string;
    questions: Question[];
  };
}

interface Question {
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

export interface OptionType {
  title: string;
  alternatives: string[];
}
