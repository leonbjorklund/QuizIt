import { Flex } from '@chakra-ui/react';

import { useAppContext } from './AppContext';
import { EndScene, HomeScene, LoadingScene, OptionsScene, PlayScene } from './scenes';
import { Header, SceneContainer } from './shared-components';
import { MainWrapperStyle, PageWrapperStyle, SceneEnum } from './utils';

export default function App() {
  const { scene } = useAppContext();

  const renderScene = (clickedScene: SceneEnum) => {
    switch (clickedScene) {
      case SceneEnum.HOME:
        return <HomeScene />;
      case SceneEnum.OPTIONS:
        return <OptionsScene />;
      case SceneEnum.LOADING:
        return <LoadingScene />;
      case SceneEnum.PLAY:
        return <PlayScene />;
      case SceneEnum.END:
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
