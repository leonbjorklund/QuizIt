import { Button, Flex, HStack, Input, Text } from '@chakra-ui/react';
import { MainWrapperStyle, PageWrapperStyle } from './GlobalStyles';
import { Header } from './components';
import { MainContainer } from './theme/MainContainer';

export default function App() {
  return (
    <Flex sx={PageWrapperStyle}>
      <Header />
      <Flex as="main" sx={MainWrapperStyle}>
        <MainContainer>
          <Text>Testing brother</Text>
          <Input placeholder="Basic usage" />
          <HStack>
            <Button variant="proceed">button</Button>
            <Button variant="return">button</Button>
            <Button variant="wrong">button</Button>
          </HStack>
        </MainContainer>
      </Flex>
    </Flex>
  );
}
