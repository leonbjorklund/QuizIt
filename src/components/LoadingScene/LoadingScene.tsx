import { Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ButtonFlexStyle } from '../../GlobalStyles';
import { fun_facts, loadingStrings } from '../../assets/strings';
import { SceneContainer } from '../../chakra/SceneContainer';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import { Loading } from './components';
import { LoadingContainerStyle } from './styles';

export const LoadingScene = () => {
  const { setScene, quizData, quizInput } = useAppContext();
  console.log('quizInput', quizInput);
  const { loadSubtitle, funFactTitle, oopsTitle, oopsSubtitle, homeBtn, tryAgainBtn } = loadingStrings;

  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isOops, setIsOops] = useState(false);

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
