import { Flex } from '@chakra-ui/react';

import { MainWrapperStyle, PageWrapperStyle } from './GlobalStyles';
import { SceneContainer } from './chakra';
import { useAppContext } from './context/AppContext';
import { EndScene, Header, HomeScene, LoadingScene, OptionsScene, PlayScene } from './scenes';
import { Scene } from './utils/types';

export default function App() {
  const { scene } = useAppContext();

  const renderScene = (clickedScene: Scene) => {
    switch (clickedScene) {
      case Scene.HOME:
        return <HomeScene />;
      case Scene.OPTIONS:
        return <OptionsScene />;
      case Scene.LOADING:
        return <LoadingScene />;
      case Scene.PLAY:
        return <PlayScene />;
      case Scene.END:
        return <EndScene />;
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
