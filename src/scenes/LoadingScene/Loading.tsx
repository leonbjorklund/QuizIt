import { Flex, Text, useColorMode } from '@chakra-ui/react';

import { loadingStrings } from '../../assets/strings';
import { LoadingDotStyle } from './styles';

export const Loading = () => {
  const { colorMode } = useColorMode();
  const dotColorMode1 = colorMode === 'dark' ? '#FAF089' : '#000';
  const dotColorMode2 = colorMode === 'dark' ? '#147849' : '#000';

  const { loading, dot } = loadingStrings;
  return (
    <Flex>
      <Text variant="loading" textAlign="center">
        {loading}
      </Text>
      <Text sx={{ ...LoadingDotStyle, animationDelay: '0s' }} variant="loading">
        {dot}
      </Text>
      <Text sx={{ ...LoadingDotStyle, animationDelay: '0.5s', color: dotColorMode1 }} variant="loading">
        {dot}
      </Text>
      <Text sx={{ ...LoadingDotStyle, animationDelay: '1s', color: dotColorMode2 }} variant="loading">
        {dot}
      </Text>
    </Flex>
  );
};
