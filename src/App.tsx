import { Flex } from '@chakra-ui/react';
import { atom, useAtom } from 'jotai';
import { useState } from 'react';

import { MainWrapperStyle, PageWrapperStyle } from './GlobalStyles';
import { GetPrompt } from './assets';
import { SceneContainer } from './chakra';
import { EndScene, Header, HomeScene, LoadingScene, OptionsScene, PlayScene } from './components';
import OptionsData from './components/OptionsScene/optionsData.json';

export enum Scene {
  HOME = 'home',
  OPTIONS = 'options',
  LOADING = 'loading',
  PLAY = 'play',
  END = 'end',
}

export interface QuizData {
  response: string;
}

export const quizDataAtom = atom<QuizData | null>(null);

export default function App() {
  const defaultQuizRequest = {
    type: OptionsData.options[0].alternatives[1],
    amount: OptionsData.options[1].alternatives[1],
    difficulty: OptionsData.options[2].alternatives[1],
  };

  const [scene, setScene] = useState<Scene>(Scene.HOME);
  const [inputValue, setInputValue] = useState('');
  const [customQuizReq, setCustomQuizReq] = useState(defaultQuizRequest);
  const [quizData, setQuizData]: [any, (data: any) => void] = useAtom(quizDataAtom);

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
      .then((data) => setQuizData(data));
  };

  const handleGenerateQuiz = () => {
    sendToServer(prompt);
    setScene(Scene.LOADING);
  };

  console.log(quizData);

  const renderScene = (clickedScene: Scene) => {
    switch (clickedScene) {
      case Scene.HOME:
        return <HomeScene setScene={setScene} inputValue={inputValue} setInputValue={setInputValue} />;
      case Scene.OPTIONS:
        return (
          <OptionsScene
            setScene={setScene}
            setCustomQuizReq={setCustomQuizReq}
            handleGenerateQuiz={handleGenerateQuiz}
          />
        );
      case Scene.LOADING:
        return <LoadingScene setScene={setScene} quizData={quizData} />;
      case Scene.PLAY:
        return <PlayScene setScene={setScene} />;
      case Scene.END:
        return <EndScene setScene={setScene} />;
    }
  };

  return (
    <Flex sx={PageWrapperStyle}>
      <Header />
      <Flex as="main" sx={MainWrapperStyle}>
        <SceneContainer>{renderScene(scene)}</SceneContainer>
      </Flex>
    </Flex>
  );
}
