import React, { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from 'react';

import { GetPrompt } from '../assets';
import { OptionsData } from '../components';
import { QuizData, QuizInputType, Scene } from '../utils/types';

interface AppContextType {
  quizInput: QuizInputType;
  setQuizInput: React.Dispatch<React.SetStateAction<QuizInputType>>;
  scene: Scene;
  setScene: (scene: Scene) => void;
  sendToServer: (queryString: string) => void;
  quizData: QuizData | null;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData | null>>;
  handleGenerateQuiz: () => void;
  customQuizReq: {
    type: string;
    amount: string;
    difficulty: string;
  };
  setCustomQuizReq: React.Dispatch<
    React.SetStateAction<{
      type: string;
      amount: string;
      difficulty: string;
    }>
  >;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  abortController: React.MutableRefObject<AbortController>;
}

export const AppContext = createContext({} as AppContextType);
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: PropsWithChildren) {
  const [scene, setScene] = useState<Scene>(() => {
    const savedScene = sessionStorage.getItem('scene');
    return savedScene === 'loading' ? Scene.HOME : (savedScene as Scene) || Scene.HOME;
  });

  const [quizInput, setQuizInput] = useState(() => {
    // Try to get the stored value from localStorage
    const savedQuizInput = sessionStorage.getItem('quizInput');

    if (savedQuizInput) {
      // Parse the saved string back into an object
      return JSON.parse(savedQuizInput);
    } else {
      // Fallback to the default state if nothing is stored
      return { value: '', isURL: false };
    }
  });

  const [quizData, setQuizData] = useState<QuizData | null>(() => {
    const savedScene = sessionStorage.getItem('scene');
    return savedScene === 'loading' ? null : JSON.parse(sessionStorage.getItem('quizData') || 'null');
  });

  useEffect(() => {
    sessionStorage.setItem('scene', scene);
  }, [scene]);

  useEffect(() => {
    sessionStorage.setItem('quizInput', JSON.stringify(quizInput));
  }, [quizInput]);

  // Effect to update sessionStorage when 'quizData' changes
  useEffect(() => {
    sessionStorage.setItem('quizData', JSON.stringify(quizData));
  }, [quizData]);

  const [score, setScore] = useState(0);

  const appendQuizReqToInput = () => {
    setQuizInput((prevState) => ({
      ...prevState,
      type: customQuizReq.type,
      amount: customQuizReq.amount,
      difficulty: customQuizReq.difficulty,
    }));
  };

  const defaultQuizRequest = {
    type: OptionsData.options[0].alternatives[1],
    amount: OptionsData.options[1].alternatives[1],
    difficulty: OptionsData.options[2].alternatives[1],
  };
  const [customQuizReq, setCustomQuizReq] = useState(defaultQuizRequest);

  const prompt = GetPrompt(quizInput.value, customQuizReq.type, customQuizReq.amount, customQuizReq.difficulty);

  const handleGenerateQuiz = () => {
    sendToServer(prompt);
    appendQuizReqToInput();
    setScene(Scene.LOADING);
  };

  const abortController = useRef(new AbortController());

  useEffect(() => {
    // Reset the AbortController when the component unmounts
    return () => abortController.current.abort();
  }, []);

  const sendToServer = (prompt: string) => {
    // Abort any ongoing request before starting a new one
    abortController.current.abort();
    abortController.current = new AbortController();

    fetch('/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: prompt }),
      signal: abortController.current.signal,
    })
      .then((res) => res.json())
      .then((data) => setQuizData(data as QuizData))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error('Fetch error:', error);
        }
      });
  };

  return (
    <AppContext.Provider
      value={{
        quizInput,
        setQuizInput,
        scene,
        setScene,
        quizData,
        setQuizData,
        sendToServer,
        handleGenerateQuiz,
        setCustomQuizReq,
        customQuizReq,
        score,
        setScore,
        abortController,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
