import React, { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from 'react';

import {
  PlayQuizState,
  QuizData,
  QuizInputType,
  Scene,
  generatePrompt,
  initialPlayQuizState,
  updatePlayQuizState,
  useSessionStorage,
} from './utils';

interface AppContextType {
  scene: Scene;
  setScene: (scene: Scene) => void;
  quizInput: QuizInputType;
  setQuizInput: React.Dispatch<React.SetStateAction<QuizInputType>>;
  fetchQuizData: (prompt: string) => void;
  quizData: QuizData | null;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData | null>>;
  handleGenerateQuiz: () => void;
  playQuizState: PlayQuizState;
  setPlayQuizState: React.Dispatch<React.SetStateAction<PlayQuizState>>;
  isOops: boolean;
  setIsOops: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext({} as AppContextType);
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: PropsWithChildren) {
  const [scene, setScene] = useSessionStorage<Scene>('scene', Scene.HOME);
  const [quizInput, setQuizInput] = useSessionStorage<QuizInputType>('quizInput', { topic: '' });
  const [quizData, setQuizData] = useSessionStorage<QuizData | null>('quizData', null);
  const [playQuizState, setPlayQuizState] = useSessionStorage<PlayQuizState>('playQuizState', initialPlayQuizState);
  const [isOops, setIsOops] = useState(false);

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const abortController = useRef(new AbortController());

  useEffect(() => {
    if (quizData?.quiz?.questions?.length > 0) {
      setPlayQuizState((prevState) => updatePlayQuizState(quizData, prevState));
    }
  }, [quizData, playQuizState.index, setPlayQuizState]);

  useEffect(() => {
    if (scene === Scene.LOADING && isFirstLoad) {
      setScene(Scene.HOME);
    }
    setIsFirstLoad(false);

    if (scene === Scene.HOME) {
      abortController.current.abort();
      setIsOops(false);
      setPlayQuizState(initialPlayQuizState);
      setQuizData(null);
      setQuizInput({ topic: '' });
    }
  }, [scene, isFirstLoad]);

  const handleGenerateQuiz = async () => {
    try {
      setScene(Scene.LOADING);
      const prompt = generatePrompt(quizInput);
      const quizData = await fetchQuizData(prompt);
      setQuizData(quizData);
    } catch (error) {
      setIsOops(true);
      console.error('Failed to generate quiz:', error.message);
    }
  };

  const fetchQuizData = async (prompt: string): Promise<QuizData> => {
    abortController.current = new AbortController();
    const response = await fetch('/sendToGPT', {
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
