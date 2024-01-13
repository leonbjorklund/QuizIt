import React, { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from 'react';

import { QuizData, QuizInputType, Scene } from '../utils/types';
import { generatePrompt } from './generatePrompt';
import { PlayQuizState, initialPlayQuizState, updatePlayQuizState } from './updateQuiz';
import useSessionStorage from './useSessionStorage';

interface AppContextType {
  scene: Scene;
  setScene: (scene: Scene) => void;
  quizInput: QuizInputType;
  setQuizInput: React.Dispatch<React.SetStateAction<QuizInputType>>;
  sendToServer: (queryString: string) => void;
  quizData: QuizData | null;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData | null>>;
  handleGenerateQuiz: () => void;
  playQuizState: PlayQuizState;
  setPlayQuizState: React.Dispatch<React.SetStateAction<PlayQuizState>>;
}

export const AppContext = createContext({} as AppContextType);
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: PropsWithChildren) {
  const [scene, setScene] = useSessionStorage<Scene>('scene', Scene.HOME);
  const [quizInput, setQuizInput] = useSessionStorage<QuizInputType>('quizInput', { topic: '', isURL: false });
  const [quizData, setQuizData] = useSessionStorage<QuizData | null>('quizData', null);
  const [playQuizState, setPlayQuizState] = useSessionStorage<PlayQuizState>('playQuizState', initialPlayQuizState);
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
      setPlayQuizState(initialPlayQuizState);
      setQuizData(null);
      setQuizInput({ topic: '', isURL: false });
    }
  }, [scene, isFirstLoad]);

  const handleGenerateQuiz = async () => {
    const prompt = generatePrompt(quizInput);
    console.log('prompt', prompt);

    setScene(Scene.LOADING);
    try {
      const quizData = await sendToServer(prompt);
      setQuizData(quizData as QuizData);
    } catch (error) {
      console.error('Error generating quiz:', error);
    }
  };

  const sendToServer = async (prompt: string): Promise<QuizData> => {
    abortController.current = new AbortController();
    const response = await fetch('/api/sendToGPT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: prompt }),
      signal: abortController.current.signal,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
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
        playQuizState,
        setPlayQuizState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
