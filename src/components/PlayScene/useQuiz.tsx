import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdOutlineCheckCircle, MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import { quizDataAtom } from '../../App';

// import quizData from './quizData.json';

export type QuizData = {
  quiz: {
    quiz: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };
};

type QuizState = {
  index: number;
  currentQuestion: QuizData['quiz']['questions'][number];
  value: string;
  showAnswer: boolean;
  userAnswers: { [key: number]: string };
};

const useQuizTest = () => {
  const [quizData, setQuizData]: [any, (data: any) => void] = useAtom(quizDataAtom);
  console.log('quizData', quizData);
  const [quizState, setQuizState] = useState<QuizState>({
    index: 0,
    currentQuestion: quizData?.quiz?.questions ? quizData.quiz.questions[0] : null,
    value: '',
    showAnswer: false,
    userAnswers: {},
  });
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  useEffect(() => {
    setQuizState((prevState) => ({
      ...prevState,
      currentQuestion: quizData.quiz.questions[prevState.index],
      showAnswer: answeredQuestions.includes(prevState.index),
    }));
  }, [quizState.index, answeredQuestions]);

  const navigateQuestion = useCallback((direction: 'next' | 'previous') => {
    setQuizState((prevState) => {
      let newIndex = direction === 'next' ? prevState.index + 1 : prevState.index - 1;
      newIndex = Math.max(0, Math.min(newIndex, quizData.quiz.questions.length - 1)); // Corrected path
      return {
        ...prevState,
        index: newIndex,
        value: '',
      };
    });
  }, []);

  const checkAnswer = useCallback(() => {
    const isAnswerShown = quizState.showAnswer;
    if (!isAnswerShown) {
      const isCorrect = quizState.value === quizState.currentQuestion.answer;
      setQuizState((prevState) => ({
        ...prevState,
        showAnswer: true,
        userAnswers: { ...prevState.userAnswers, [prevState.index]: quizState.value },
      }));
      setAnsweredQuestions((prev) => [...prev, quizState.index]);

      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      navigateQuestion('next');
    }
  }, [quizState, navigateQuestion]);

  const renderIcon = useCallback(
    (option: string) => {
      const { showAnswer, currentQuestion, userAnswers, index, value } = quizState;
      if (showAnswer) {
        if (option === currentQuestion.answer) {
          return MdOutlineCheckCircle;
        }
        if (option === userAnswers[index]) {
          return IoMdCloseCircleOutline;
        }
      }
      return option === value ? MdRadioButtonChecked : MdRadioButtonUnchecked;
    },
    [quizState],
  );

  return {
    ...quizState,
    score,
    answeredQuestions,
    setQuizState,
    navigateQuestion,
    checkAnswer,
    renderIcon,
  };
};

export default useQuizTest;
