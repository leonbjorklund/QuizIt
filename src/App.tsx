import { Flex } from '@chakra-ui/react';

import { useAppContext } from './AppContext';
import { EndScene, HomeScene, LoadingScene, OptionsScene, PlayScene } from './scenes';
import { Header, SceneContainer } from './shared-components';
import { MainWrapperStyle, PageWrapperStyle, Scene } from './utils';

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
