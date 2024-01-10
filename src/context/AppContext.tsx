import React, { PropsWithChildren, createContext, useContext, useEffect, useRef, useState } from 'react';

import { QuizData, QuizInputType, Scene, customQuizReqType } from '../utils/types';
import { defaultQuizRequest, generatePrompt } from './sendToGPT';
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
  customQuizReq: customQuizReqType;
  setCustomQuizReq: React.Dispatch<React.SetStateAction<customQuizReqType>>;
  abortController: React.MutableRefObject<AbortController>;
  playQuizState: PlayQuizState;
  setPlayQuizState: React.Dispatch<React.SetStateAction<PlayQuizState>>;
}

export const AppContext = createContext({} as AppContextType);
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: PropsWithChildren) {
  const [scene, setScene] = useSessionStorage<Scene>('scene', Scene.HOME);
  const [quizInput, setQuizInput] = useSessionStorage<QuizInputType>('quizInput', { value: '', isURL: false });
  const [quizData, setQuizData] = useSessionStorage<QuizData | null>('quizData', null);
  const [playQuizState, setPlayQuizState] = useSessionStorage<PlayQuizState>('playQuizState', initialPlayQuizState);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [customQuizReq, setCustomQuizReq] = useState(defaultQuizRequest);

  useEffect(() => {
    if (quizData?.quiz?.questions?.length > 0) {
      setPlayQuizState((prevState) => updatePlayQuizState(quizData, prevState));
    }
  }, [quizData, playQuizState.index, setPlayQuizState]);

  useEffect(() => {
    // Redirect to home if the user is on the loading page and refreshes the page
    if (scene === Scene.LOADING && isFirstLoad) {
      setScene(Scene.HOME);
    }
    setIsFirstLoad(false);

    // Reset quiz data and abort fetch when navigating back to the home scene
    if (scene === Scene.HOME) {
      abortController.current.abort();
      setPlayQuizState(initialPlayQuizState);
      setQuizData(null);
      setQuizInput({ value: '', isURL: false });
    }
  }, [scene, isFirstLoad]);

  const appendQuizReqToInput = () => {
    setQuizInput((prevState) => ({
      ...prevState,
      type: customQuizReq.type,
      amount: customQuizReq.amount,
      difficulty: customQuizReq.difficulty,
    }));
  };

  const prompt = generatePrompt(quizInput, customQuizReq);

  const handleGenerateQuiz = () => {
    sendToServer(prompt);
    appendQuizReqToInput();
    setScene(Scene.LOADING);
  };

  const sendToServer = (prompt: string) => {
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

  const abortController = useRef(new AbortController());

  useEffect(() => {
    // Reset the AbortController when the component unmounts
    return () => abortController.current.abort();
  }, []);

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
        playQuizState,
        setPlayQuizState,
        abortController,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
