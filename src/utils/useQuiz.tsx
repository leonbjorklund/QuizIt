import { useCallback } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdOutlineCheckCircle, MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

import { useAppContext } from '../AppContext';

const useQuizTest = () => {
  const { playQuizState, setPlayQuizState, quizData } = useAppContext();

  const navigateQuestion = useCallback(
    (direction: 'NEXT' | 'PREV') => {
      setPlayQuizState((prevState) => {
        const totalQuestions = quizData.quiz.questions.length;
        const newIndex = direction === 'NEXT' ? prevState.index + 1 : prevState.index - 1;
        return {
          ...prevState,
          index: Math.max(0, Math.min(newIndex, totalQuestions - 1)),
          value: '',
        };
      });
    },
    [quizData.quiz.questions.length],
  );

  const checkAnswer = useCallback(() => {
    if (!playQuizState.showAnswer) {
      const isCorrect = playQuizState.value === playQuizState.currentQuestion.answer;
      setPlayQuizState((prevState) => ({
        ...prevState,
        showAnswer: true,
        userAnswers: { ...prevState.userAnswers, [prevState.index]: playQuizState.value },
        answeredQuestions: [...prevState.answeredQuestions, prevState.index],
        score: isCorrect ? prevState.score + 1 : prevState.score,
      }));
    } else {
      navigateQuestion('NEXT');
    }
  }, [playQuizState, navigateQuestion]);

  const renderIcon = useCallback(
    (option: string) => {
      const { showAnswer, currentQuestion, userAnswers, index, value } = playQuizState;
      if (showAnswer) {
        if (option === currentQuestion.answer) return MdOutlineCheckCircle;
        if (option === userAnswers[index]) return IoMdCloseCircleOutline;
      }
      return option === value ? MdRadioButtonChecked : MdRadioButtonUnchecked;
    },
    [playQuizState],
  );

  return {
    ...playQuizState,
    setPlayQuizState,
    navigateQuestion,
    checkAnswer,
    renderIcon,
  };
};

export default useQuizTest;
