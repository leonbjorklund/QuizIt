import { Button, Flex, HStack, Heading, Icon, IconButton, Text, VStack } from '@chakra-ui/react';
import { FaDiscord, FaFacebook, FaRegCopy } from 'react-icons/fa';

import { SceneContainer } from '../../chakra';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';

export const EndScene = () => {
  const { setScene } = useAppContext();

  return (
    <SceneContainer variant="endScene">
      <Heading lineHeight="1.2" fontSize={{ base: '46px', sm: '58px', md: '68px', lg: '78px' }} fontWeight="bold">
        8 / 10
        <br />
        Good Job!
      </Heading>
      <Flex gap="1.5em" flexDirection={{ base: 'column-reverse', sm: 'row' }}>
        <Button
          fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '22px' }}
          variant="return"
          onClick={() => setScene(Scene.HOME)}
        >
          New Quiz
        </Button>
        <Button
          fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '22px' }}
          variant="proceed"
          onClick={() => console.log('hello')}
        >
          Play Again
        </Button>
      </Flex>
      <VStack w="100%">
        <Text my="1rem" fontSize={{ base: '24px', sm: '26px', md: '28px', lg: '30px' }}>
          Share this Quiz
        </Text>
        <HStack w="100%" justifyContent="center" gap="2rem">
          <IconButton
            icon={<Icon as={FaRegCopy} boxSize="2rem" />}
            aria-label="share-discord"
            isRound
            onClick={() => console.log('hello')}
            w="auto"
            h="auto"
            padding=".5rem"
          />
          <IconButton
            icon={<Icon as={FaDiscord} boxSize="2rem" />}
            aria-label="share-discord"
            isRound
            onClick={() => console.log('hello')}
            w="auto"
            h="auto"
            padding=".5rem"
            bg="#5865F2"
            _hover={{ bg: '#5865f2bc' }}
          />
          <IconButton
            icon={<Icon as={FaFacebook} boxSize="3rem" color="blue" />}
            aria-label="share-discord"
            isRound
            w="auto"
            h="auto"
            outline="none!important"
            border="none!important"
            onClick={() => console.log('hello')}
            bg="#FFFF"
            _hover={{ bg: '#ffffffc5' }}
          />
        </HStack>
      </VStack>
    </SceneContainer>
  );
};
