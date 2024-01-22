import { Button, Flex, HStack, Heading, Icon, Text, Tooltip, VStack } from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton } from 'react-share';

import { useEffect, useState } from 'react';
import { useAppContext } from '../../AppContext';
import { endStrings } from '../../assets';
import { SceneContainer } from '../../shared-components';
import { ButtonFlexStyle, Scene, initialPlayQuizState } from '../../utils';
import { CopySiteButton } from './CopySiteButton';
import { FacebookShareButtonStyle, GoodJobText, ShareButtonsFlex, ShareQuizItText } from './styles';

const { goodJob, btns, share } = endStrings;

export const EndScene = () => {
  const { setScene, quizData, playQuizState, setPlayQuizState } = useAppContext();
  const [currentUrl, setCurrentUrl] = useState('');

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
          <Tooltip closeOnClick hasArrow offset={[0, 10]} label="Share QuizIt on Facebook">
            <FacebookShareButton url={currentUrl} style={FacebookShareButtonStyle}>
              <Icon as={BsFacebook} boxSize="3rem" color="#0866FF" />
            </FacebookShareButton>
          </Tooltip>
          <Tooltip closeOnClick hasArrow offset={[0, 10]} label="Share QuizIt on Reddit">
            <RedditShareButton url={currentUrl} windowWidth={660} windowHeight={460}>
              <RedditIcon size={48} round />
            </RedditShareButton>
          </Tooltip>
          <Tooltip closeOnClick hasArrow offset={[0, 10]} label="Share QuizIt on LinkedIn">
            <LinkedinShareButton url={currentUrl}>
              <LinkedinIcon size={48} round />
            </LinkedinShareButton>
          </Tooltip>
          <CopySiteButton currentUrl={currentUrl} />
        </HStack>
      </VStack>
    </SceneContainer>
  );
};
