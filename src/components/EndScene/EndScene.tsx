import { Button, Flex, HStack, Heading, Icon, Text, Tooltip, VStack } from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton } from 'react-share';

import { useEffect, useState } from 'react';
import { ButtonFlexStyle } from '../../GlobalStyles';
import { endStrings } from '../../assets';
import { SceneContainer } from '../../chakra';
import { useAppContext } from '../../context/AppContext';
import { initialPlayQuizState } from '../../context/updateQuiz';
import { Scene } from '../../utils/types';
import { CopySiteButton } from './CopySiteButton';
import { GoodJobText, ShareButtonsFlex, ShareQuizItText } from './styles';

export const EndScene = () => {
  const { setScene, quizData, playQuizState, setPlayQuizState } = useAppContext();
  const [currentUrl, setCurrentUrl] = useState('');

  const { goodJob, btns, share } = endStrings;

  const title = 'QuizIt Repository';

  const resetPlayQuizState = () => {
    const newState = {
      ...initialPlayQuizState,
      currentQuestion: quizData?.quiz?.questions[initialPlayQuizState.index],
    };
    setPlayQuizState(newState);
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <SceneContainer variant="endScene">
      <Heading sx={GoodJobText}>
        {`${playQuizState.score} / ${quizData.quiz.questions.length}`}
        <br />
        {goodJob}
      </Heading>
      <Flex sx={ButtonFlexStyle}>
        <Button
          variant="return"
          onClick={() => {
            setScene(Scene.HOME);
          }}
        >
          {btns.new}
        </Button>
        <Button
          variant="proceed"
          onClick={() => {
            resetPlayQuizState();
            setScene(Scene.PLAY);
          }}
        >
          {btns.again}
        </Button>
      </Flex>
      <VStack w="100%">
        <Text sx={ShareQuizItText}>{share}</Text>
        <HStack sx={ShareButtonsFlex}>
          <Tooltip hasArrow offset={[0, 10]} label="Share QuizIt on Facebook">
            <FacebookShareButton
              // remember to change to currentURL when we have a domain
              //  url={currentUrl}
              url="https://github.com/ParhamInBinary/QuizIt"
              style={{ backgroundColor: '#ffffff', borderRadius: '999px', display: 'flex' }}
            >
              <Icon as={BsFacebook} boxSize="3rem" color="#0866FF" />
            </FacebookShareButton>
          </Tooltip>
          <Tooltip hasArrow offset={[0, 10]} label="Share QuizIt on Reddit">
            <RedditShareButton
              // remember to change to currentURL when we have a domain
              //  url={currentUrl}
              url="https://github.com/ParhamInBinary/QuizIt"
              title={title}
              windowWidth={660}
              windowHeight={460}
            >
              <RedditIcon size={48} round />
            </RedditShareButton>
          </Tooltip>
          <Tooltip hasArrow offset={[0, 10]} label="Share QuizIt on Reddit">
            <LinkedinShareButton
              // remember to change to currentURL when we have a domain
              //  url={currentUrl}
              url="https://github.com/ParhamInBinary/QuizIt"
            >
              <LinkedinIcon size={48} round />
            </LinkedinShareButton>
          </Tooltip>
          <CopySiteButton currentUrl={currentUrl} />
        </HStack>
      </VStack>
    </SceneContainer>
  );
};
