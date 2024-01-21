import { Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppContext } from '../../AppContext';
import { fun_facts, loadingStrings } from '../../assets/strings';
import { SceneContainer } from '../../shared-components';
import { ButtonFlexStyle, Scene } from '../../utils';
import { Loading } from './Loading';
import { LoadingContainerStyle } from './styles';

const { loadSubtitle, funFactTitle, oopsTitle, oopsSubtitle, homeBtn, tryAgainBtn } = loadingStrings;

export const LoadingScene = () => {
  const { setScene, quizData, quizInput, isOops, setIsOops } = useAppContext();
  console.log('quizInput', quizInput);

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fun_facts.fun_facts.length);
      setCurrentFactIndex(randomIndex);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const renderFunFact = () => {
    return fun_facts.fun_facts[currentFactIndex];
  };

  useEffect(() => {
    if (quizData) {
      setScene(Scene.PLAY);
    }
  }, [quizData, setScene]);
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
          <Flex sx={ButtonFlexStyle}>
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
      ) : !quizData ? (
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
      ) : null}
    </>
  );
};
