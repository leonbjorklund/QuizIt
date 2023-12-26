import { Button, Flex, Text } from '@chakra-ui/react';
import { MainStyle, PageContainerStyle } from './GlobalStyles';
import { Header } from './components';
import { MainContainer } from './theme/MainContainer';

export default function App() {
  return (
    <Flex sx={PageContainerStyle}>
      <Header />
      <Flex as="main" sx={MainStyle}>
        <MainContainer>
          <Text>Testing brother</Text>
          <Button variant="proceed">button</Button>
        </MainContainer>
      </Flex>
    </Flex>
  );
}
