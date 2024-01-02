import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { MainWrapperStyle, PageWrapperStyle } from './GlobalStyles';
import { SceneContainer } from './chakra/SceneContainer';
import { EndScene, Header, HomeScene, LoadingScene, OptionsScene, PlayScene } from './components';

export enum Scene {
  HOME = 'home',
  OPTIONS = 'options',
  LOADING = 'loading',
  PLAY = 'play',
  END = 'end',
}

export default function App() {
  const [scene, setScene] = useState<Scene>(Scene.HOME);

  const renderScene = (clickedScene: Scene) => {
    switch (clickedScene) {
      case Scene.HOME:
        return <HomeScene setScene={setScene} />;
      case Scene.OPTIONS:
        return <OptionsScene setScene={setScene} />;
      case Scene.LOADING:
        return <LoadingScene setScene={setScene} />;
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
