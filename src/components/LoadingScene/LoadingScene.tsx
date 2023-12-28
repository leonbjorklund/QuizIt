import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { fun_facts, loadingStrings } from '../../assets/strings';
import { MainContainer } from '../../theme/MainContainer';
import { Loading } from './components';

export const LoadingScene = () => {
  const { loadSubtitle, funFactTitle } = loadingStrings;
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

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
      <Flex alignItems="center" flexDirection="column" lineHeight="1.35">
        <Loading />
        <Text variant="loadSubtitle">{loadSubtitle}</Text>
      </Flex>

      <MainContainer variant="funFact">
        <Text variant="funFactTitle">{funFactTitle}</Text>
        <Text variant="funFact">{renderFunFact()}</Text>
      </MainContainer>
    </>
  );
};
