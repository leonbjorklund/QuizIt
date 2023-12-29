import { Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Scene } from '../../App';
import { fun_facts, loadingStrings } from '../../assets/strings';
import { SceneContainer } from '../../chakra/SceneContainer';
import { Loading } from './components';
import { LoadingContainerStyle } from './styles';

interface ILoading {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

export const LoadingScene = ({ setScene }: ILoading) => {
  const isDesktop = useBreakpointValue({ base: false, sm: true });

  const { loadSubtitle, funFactTitle, oopsTitle, oopsSubtitle, homeBtn, tryAgainBtn } = loadingStrings;

  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isOops, setIsOops] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fun_facts.fun_facts.length);
      setCurrentFactIndex(randomIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderFunFact = () => {
    return fun_facts.fun_facts[currentFactIndex] as string;
  };

  return (
    <>
      {isOops ? (
        <>
          <Flex sx={LoadingContainerStyle}>
            <Text variant="loading">{oopsTitle}</Text>
            <Text variant="loadSubtitle" opacity="1">
              {oopsSubtitle}
            </Text>
          </Flex>
          <Flex gap="1.5em" flexDirection={!isDesktop ? 'column-reverse' : 'row'} width={!isDesktop ? '100%' : 'auto'}>
            <Button variant="return" onClick={() => setScene(Scene.HOME)}>
              {homeBtn}
            </Button>
            <Button
              variant="proceed"
              onClick={() => setIsOops(false) /*this is just to avoid lint issue until the logic is set*/}
            >
              {tryAgainBtn}
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Flex sx={LoadingContainerStyle}>
            <Loading />
            <Text variant="loadSubtitle">{loadSubtitle}</Text>
          </Flex>

          <SceneContainer variant="funFact">
            <Text variant="funFactTitle">{funFactTitle}</Text>
            <Text variant="funFact">{renderFunFact()}</Text>
          </SceneContainer>
        </>
      )}
    </>
  );
};
