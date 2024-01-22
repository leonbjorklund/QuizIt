import { Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useAppContext } from '../../AppContext';
import { fun_facts, loadingStrings } from '../../assets/strings';
import { SceneContainer } from '../../shared-components';
import { ButtonFlexStyle, SceneEnum } from '../../utils';
import { LoadingAnimation } from './LoadingAnimation';
import { LoadingContainerStyle } from './styles';

const { loadSubtitle, funFactTitle, oopsTitle, oopsSubtitle, homeBtn, tryAgainBtn } = loadingStrings;

const FUN_FACT_INTERVAL_MS = 9000;

export const LoadingScene = () => {
  const { setScene, quizData, isOops, setIsOops, handleGenerateQuiz } = useAppContext();

  const initialFactIndex = Math.floor(Math.random() * fun_facts.fun_facts.length);
  const [currentFactIndex, setCurrentFactIndex] = useState(initialFactIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fun_facts.fun_facts.length);
      setCurrentFactIndex(randomIndex);
    }, FUN_FACT_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (quizData) {
      setScene(SceneEnum.PLAY);
    }
  }, [quizData, setScene]);

  return (
    <>
      {isOops ? (
        <>
          <Flex sx={LoadingContainerStyle}>
            <Text variant="loading">{oopsTitle}</Text>
            <Text variant="loadSubtitle">{oopsSubtitle}</Text>
          </Flex>
          <Flex sx={ButtonFlexStyle}>
            <Button variant="return" onClick={() => setScene(SceneEnum.HOME)}>
              {homeBtn}
            </Button>
            <Button
              variant="proceed"
              onClick={() => {
                setIsOops(false);
                handleGenerateQuiz();
              }}
            >
              {tryAgainBtn}
            </Button>
          </Flex>
        </>
      ) : (
        !quizData && (
          <>
            <Flex sx={LoadingContainerStyle}>
              <LoadingAnimation />
              <Text variant="loadSubtitle">{loadSubtitle}</Text>
            </Flex>
            <SceneContainer variant="funFact">
              <Text variant="funFactTitle">{funFactTitle}</Text>
              <Text variant="funFact">{fun_facts.fun_facts[currentFactIndex]}</Text>
            </SceneContainer>
          </>
        )
      )}
    </>
  );
};
