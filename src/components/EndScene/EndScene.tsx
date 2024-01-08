import { Button, Flex, HStack, Heading, Icon, IconButton, Text, VStack } from '@chakra-ui/react';
import { FaDiscord, FaFacebook, FaRegCopy } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import { endStrings } from '../../assets';
import { SceneContainer } from '../../chakra';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';

export const EndScene = () => {
  const { setScene, quizData, score, setScore, setQuizData } = useAppContext();

  const { goodJob, btns, share } = endStrings;

  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const copyUrl = () => {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <SceneContainer variant="endScene">
      <Heading lineHeight="1.2" fontSize={{ base: '46px', sm: '58px', md: '68px', lg: '78px' }} fontWeight="bold">
        {`${score} / ${quizData.quiz.questions.length}`}
        <br />
        {goodJob}
      </Heading>
      <Flex gap="1.5em" flexDirection="row">
        <Button
          fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '22px' }}
          variant="return"
          onClick={() => {
            setQuizData(null);
            setScore(0);
            setScene(Scene.HOME);
          }}
        >
          {btns.new}
        </Button>
        <Button
          fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '22px' }}
          variant="proceed"
          onClick={() => {
            setScore(0);
            setScene(Scene.PLAY);
          }}
        >
          {btns.again}
        </Button>
      </Flex>
      <VStack w="100%">
        <Text my="1rem" fontSize={{ base: '24px', sm: '26px', md: '28px', lg: '30px' }}>
          {share}
        </Text>
        <HStack w="100%" justifyContent="center" gap="2rem">
          <IconButton
            icon={<Icon as={FaRegCopy} boxSize="2rem" />}
            aria-label="share-discord"
            isRound
            w="auto"
            h="auto"
            padding=".5rem"
            onClick={copyUrl}
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
            icon={<Icon as={FaFacebook} boxSize="3rem" color="#0866FF" />}
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
