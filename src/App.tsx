import { Flex } from '@chakra-ui/react';

import { MainWrapperStyle, PageWrapperStyle } from './GlobalStyles';
import { Header, HomeScene } from './components';
import { MainContainer } from './theme/MainContainer';

export default function App() {
  return (
    <Flex sx={PageWrapperStyle}>
      <Header />
      <Flex as="main" sx={MainWrapperStyle}>
        <MainContainer>
          <HomeScene />
        </MainContainer>
      </Flex>
    </Flex>
  );
}
