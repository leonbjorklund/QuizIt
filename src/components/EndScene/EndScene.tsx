import { Button, Flex, HStack, Heading, Icon, IconButton, Text, Tooltip, VStack } from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { FaRegCopy } from 'react-icons/fa';
import { FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton } from 'react-share';

import { useEffect, useRef, useState } from 'react';
import { ButtonFlexStyle } from '../../GlobalStyles';
import { endStrings } from '../../assets';
import { SceneContainer } from '../../chakra';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';

export const EndScene = () => {
  const { setScene, quizData, score, setScore, setQuizData } = useAppContext();

  const { goodJob, btns, share } = endStrings;

  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const tooltipRef = useRef(null);
  const tooltipLabel = isCopied ? 'Copied!' : 'Copy Site Link';
  const title = 'QuizIt Repository';

  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const copyUrl = () => {
    const el = document.createElement('input');
    el.setAttribute('name', 'tooltip-input');

    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsCopied(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCopied(false);
  };

  return (
    <SceneContainer variant="endScene">
      <Heading lineHeight="1.2" fontSize={{ base: '46px', sm: '58px', md: '68px', lg: '78px' }} fontWeight="bold">
        {`${score} / ${quizData.quiz.questions.length}`}
        <br />
        {goodJob}
      </Heading>
      <Flex sx={ButtonFlexStyle}>
        <Button
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
        <Text my="1rem" textAlign="center" fontSize={{ base: '24px', sm: '26px', md: '28px', lg: '30px' }}>
          {share}
        </Text>
        <HStack w="100%" justifyContent="center" gap="2rem">
          <Tooltip hasArrow offset={[0, 10]} label="Share QuizIt on Reddit">
            <RedditShareButton
              url="https://github.com/ParhamInBinary/QuizIt"
              title={title}
              windowWidth={660}
              windowHeight={460}
            >
              <RedditIcon size={48} round />
            </RedditShareButton>
          </Tooltip>
          <Tooltip hasArrow offset={[0, 10]} label="Share QuizIt on Facebook">
            <FacebookShareButton
              // remember to change to currentURL when we have a domain
              url="https://github.com/ParhamInBinary/QuizIt"
              style={{ backgroundColor: '#ffffff', borderRadius: '999px', display: 'flex' }}
            >
              <Icon as={BsFacebook} boxSize="3rem" color="#0866FF" />
            </FacebookShareButton>
          </Tooltip>
          <Tooltip hasArrow offset={[0, 10]} label="Share QuizIt on Reddit">
            <LinkedinShareButton url="https://github.com/ParhamInBinary/QuizIt">
              <LinkedinIcon size={48} round />
            </LinkedinShareButton>
          </Tooltip>
          <Tooltip
            hasArrow
            offset={[0, 10]}
            label={tooltipLabel}
            closeOnClick={false}
            ref={tooltipRef}
            isOpen={isHovered || isCopied}
          >
            <IconButton
              name="copy-link"
              icon={<Icon as={FaRegCopy} boxSize="1.8rem" />}
              aria-label="share-discord"
              isRound
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={copyUrl}
              bg="blue.900"
              padding=".75rem"
              h="auto"
              w="auto"
            />
          </Tooltip>
        </HStack>
      </VStack>
    </SceneContainer>
  );
};
