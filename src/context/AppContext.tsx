import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

import { GetPrompt } from '../assets';
import { OptionsData } from '../components';
import { QuizData, Scene } from '../utils/types';

interface AppContextType {
  quizInput: {
    value: string;
    isURL: boolean;
  };
  setQuizInput: React.Dispatch<
    React.SetStateAction<{
      value: string;
      isURL: boolean;
    }>
  >;
  scene: Scene;
  setScene: (scene: Scene) => void;
  sendToServer: (queryString: string) => void;
  quizData: QuizData | null;
  setQuizData: React.Dispatch<React.SetStateAction<QuizData | null>>;
  handleGenerateQuiz: () => void;
  setCustomQuizReq: React.Dispatch<
    React.SetStateAction<{
      type: string;
      amount: string;
      difficulty: string;
    }>
  >;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext({} as AppContextType);
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }: PropsWithChildren) {
  const [scene, setScene] = useState<Scene>(Scene.HOME); // default scene, persistance fixas här
  const [quizInput, setQuizInput] = useState({ value: '', isURL: false });

  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [score, setScore] = useState(0);

  const defaultQuizRequest = {
    type: OptionsData.options[0].alternatives[1],
    amount: OptionsData.options[1].alternatives[1],
    difficulty: OptionsData.options[2].alternatives[1],
  };
  const [customQuizReq, setCustomQuizReq] = useState(defaultQuizRequest);

  const prompt = GetPrompt(quizInput.value, customQuizReq.type, customQuizReq.amount, customQuizReq.difficulty);

  const handleGenerateQuiz = () => {
    sendToServer(prompt);
    setScene(Scene.LOADING);
  };

  const sendToServer = (prompt: string) => {
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: prompt }),
    })
      .then((res) => res.json())
      .then((data) => setQuizData(data as QuizData));
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
        score,
        setScore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
