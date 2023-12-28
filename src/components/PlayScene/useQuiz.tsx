import { useCallback, useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdOutlineCheckCircle, MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';
import quizData from './quizData.json';

type QuizState = {
  index: number;
  currentQuestion: (typeof quizData.questions)[number];
  value: string;
  showAnswer: boolean;
  userAnswers: { [key: number]: string };
};

const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    index: 0,
    currentQuestion: quizData.questions[0],
    value: '',
    showAnswer: false,
    userAnswers: {},
  });
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  useEffect(() => {
    setQuizState((prevState) => ({
      ...prevState,
      currentQuestion: quizData.questions[prevState.index],
      showAnswer: answeredQuestions.includes(prevState.index),
    }));
  }, [quizState.index, answeredQuestions]);

  const navigateQuestion = useCallback((direction: 'next' | 'previous') => {
    setQuizState((prevState) => {
      let newIndex = direction === 'next' ? prevState.index + 1 : prevState.index - 1;
      newIndex = Math.max(0, Math.min(newIndex, quizData.questions.length - 1));
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
      const isCorrect = quizState.value === quizState.currentQuestion.correctAnswer;
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
        if (option === currentQuestion.correctAnswer) {
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

export default useQuiz;
