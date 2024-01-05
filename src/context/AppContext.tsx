import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

import { GetPrompt } from '../assets';
import { OptionsData } from '../components';
import { QuizData, Scene } from '../utils/types';

interface AppContextType {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  scene: Scene;
  setScene: (scene: Scene) => void;
  quizData: QuizData | null;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData | null>>;
  sendToServer: (queryString: string) => void;
  handleGenerateQuiz: () => void;
  setCustomQuizReq: React.Dispatch<
    React.SetStateAction<{
      type: string;
      amount: string;
      difficulty: string;
    }>
  >;
}

export const AppContext = createContext({} as AppContextType);
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: PropsWithChildren) {
  const [scene, setScene] = useState<Scene>(Scene.HOME);
  const [inputValue, setInputValue] = useState('');
  const [quizData, setQuizData] = useState<QuizData | null>(null);

  const defaultQuizRequest = {
    type: OptionsData.options[0].alternatives[1],
    amount: OptionsData.options[1].alternatives[1],
    difficulty: OptionsData.options[2].alternatives[1],
  };
  const [customQuizReq, setCustomQuizReq] = useState(defaultQuizRequest);

  const prompt = GetPrompt(inputValue, customQuizReq.type, customQuizReq.amount, customQuizReq.difficulty);

  const sendToServer = (queryString: string) => {
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: queryString }),
    })
      .then((res) => res.json())
      .then((data) => setQuizData(data as QuizData));
  };

  const handleGenerateQuiz = () => {
    sendToServer(prompt);
    setScene(Scene.LOADING);
  };

  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        scene,
        setScene,
        quizData,
        setQuizData,
        sendToServer,
        handleGenerateQuiz,
        setCustomQuizReq,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
