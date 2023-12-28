import { Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Scene } from '../../App';
import { fun_facts, loadingStrings } from '../../assets/strings';
import { MainContainer } from '../../theme/MainContainer';
import { Loading } from './components';

interface ILoading {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

export const LoadingScene = ({ setScene }: ILoading) => {
  const { loadSubtitle, funFactTitle, oopsTitle, oopsSubtitle, homeBtn, tryAgainBtn } = loadingStrings;

  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isOops, setIsOops] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * fun_facts.fun_facts.length);
      setCurrentFactIndex(randomIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderFunFact = () => {
    return fun_facts.fun_facts[currentFactIndex];
  };

  return (
    <>
      {isOops ? (
        <>
          <Flex flexDirection="column" alignItems="center" lineHeight="1.25" mb="2rem">
            <Text variant="loading">{oopsTitle}</Text>
            <Text variant="loadSubtitle" opacity="1">
              {oopsSubtitle}
            </Text>
          </Flex>
          <Flex gap="1.5em">
            <Button variant="return" onClick={() => setScene(Scene.HOME)}>
              {homeBtn}
            </Button>
            <Button variant="proceed">{tryAgainBtn}</Button>
          </Flex>
        </>
      ) : (
        <>
          <Flex alignItems="center" flexDirection="column" lineHeight="1.35">
            <Loading />
            <Text variant="loadSubtitle">{loadSubtitle}</Text>
          </Flex>

          <MainContainer variant="funFact">
            <Text variant="funFactTitle">{funFactTitle}</Text>
            <Text variant="funFact">{renderFunFact()}</Text>
          </MainContainer>
        </>
      )}
    </>
  );
};
