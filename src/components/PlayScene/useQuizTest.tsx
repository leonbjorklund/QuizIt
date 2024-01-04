import { useCallback, useEffect, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdOutlineCheckCircle, MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

type QuizState = {
  index: number;
  currentQuestion: { question: string; options: string[]; answer: string } | null;
  value: string;
  showAnswer: boolean;
  userAnswers: { [key: number]: string };
};

const useQuizTest = () => {
  const [loadedQuizData, setLoadedQuizData] = useState(() => {
    const savedData = localStorage.getItem('quizData');
    return savedData ? JSON.parse(savedData).quiz : null; // Updated to access the 'quiz' property
  });

  const [quizState, setQuizState] = useState<QuizState>({
    index: 0,
    currentQuestion: loadedQuizData ? loadedQuizData.questions[0] : null,
    value: '',
    showAnswer: false,
    userAnswers: {},
  });
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  useEffect(() => {
    if (loadedQuizData) {
      setQuizState((prevState) => ({
        ...prevState,
        currentQuestion: loadedQuizData.questions[prevState.index],
        showAnswer: answeredQuestions.includes(prevState.index),
      }));
    }
  }, [quizState.index, answeredQuestions, loadedQuizData]);

  const navigateQuestion = useCallback(
    (direction: 'next' | 'previous') => {
      setQuizState((prevState) => {
        let newIndex = direction === 'next' ? prevState.index + 1 : prevState.index - 1;
        newIndex = Math.max(0, Math.min(newIndex, loadedQuizData.questions.length - 1));
        return {
          ...prevState,
          index: newIndex,
          value: '',
        };
      });
    },
    [loadedQuizData],
  );

  const checkAnswer = useCallback(() => {
    const isAnswerShown = quizState.showAnswer;
    if (!isAnswerShown) {
      const isCorrect = quizState.value === quizState.currentQuestion.answer; // Updated to 'answer'
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
          // Updated to 'answer'
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
