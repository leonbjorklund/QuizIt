import React, { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from 'react';

import {
  PlayQuizStateType,
  QuizDataType,
  QuizInputType,
  SceneEnum,
  generatePrompt,
  initialPlayQuizState,
  updatePlayQuizState,
  useSessionStorage,
} from './utils';

interface AppContextType {
  scene: SceneEnum;
  setScene: (scene: SceneEnum) => void;
  quizInput: QuizInputType;
  setQuizInput: React.Dispatch<React.SetStateAction<QuizInputType>>;
  fetchQuizData: (prompt: string) => void;
  quizData: QuizDataType | null;
  setQuizData: React.Dispatch<React.SetStateAction<QuizDataType | null>>;
  handleGenerateQuiz: () => void;
  playQuizState: PlayQuizStateType;
  setPlayQuizState: React.Dispatch<React.SetStateAction<PlayQuizStateType>>;
  isOops: boolean;
  setIsOops: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext({} as AppContextType);
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: PropsWithChildren) {
  const [scene, setScene] = useSessionStorage<SceneEnum>('scene', SceneEnum.HOME);
  const [quizInput, setQuizInput] = useSessionStorage<QuizInputType>('quizInput', { topic: '' });
  const [quizData, setQuizData] = useSessionStorage<QuizDataType | null>('quizData', null);
  const [playQuizState, setPlayQuizState] = useSessionStorage<PlayQuizStateType>('playQuizState', initialPlayQuizState);
  const [isOops, setIsOops] = useSessionStorage<boolean>('isOops', false);

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const abortController = useRef(new AbortController());

  useEffect(() => {
    if (quizData?.quiz?.questions?.length > 0) {
      setPlayQuizState((prevState) => updatePlayQuizState(quizData, prevState));
    }
  }, [quizData, playQuizState.index, setPlayQuizState]);

  useEffect(() => {
    if (scene === SceneEnum.LOADING && isFirstLoad) {
      setIsOops(false);
      setScene(SceneEnum.HOME);
    }
    setIsFirstLoad(false);

    if (scene === SceneEnum.HOME) {
      abortController.current.abort();
      setPlayQuizState(initialPlayQuizState);
      setQuizData(null);
      setQuizInput({ topic: '' });
      setIsOops(false);
    }
  }, [scene, isFirstLoad]);

  const handleGenerateQuiz = async () => {
    try {
      setScene(SceneEnum.LOADING);
      const prompt = generatePrompt(quizInput);
      const quizData = await fetchQuizData(prompt);
      setQuizData(quizData);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
        return;
      }
      setIsOops(true);
      console.error('Failed to generate quiz:', error.message);
    }
  };

  const fetchQuizData = async (prompt: string): Promise<QuizDataType> => {
    abortController.current = new AbortController();
    const response = await fetch('/sendToGPT', {
      // const response = await fetch('api/sendToGPT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: prompt }),
      signal: abortController.current.signal,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      setIsOops(true);
      throw new Error(errorResponse.error || 'Network response was not ok');
    }

    return await response.json();
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
        fetchQuizData,
        handleGenerateQuiz,
        playQuizState,
        setPlayQuizState,
        isOops,
        setIsOops,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
