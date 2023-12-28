import { Button, Flex, HStack, Heading, Icon, IconButton, RadioGroup, Spacer, Text } from '@chakra-ui/react';
import { Radio } from './Radio';

import { ChevronLeftIcon } from '@chakra-ui/icons';
import { SceneContainer } from '../../theme/SceneContainer';
import quizData from './quizData.json';
import useQuiz from './useQuiz';

export const PlayScene = () => {
  const {
    index,
    currentQuestion,
    value,
    showAnswer,
    // score, Används senare
    userAnswers,
    setQuizState,
    navigateQuestion,
    checkAnswer,
    renderIcon,
  } = useQuiz();

  return (
    <>
      <HStack maxWidth={{ sm: '600px', md: '600px', lg: '100%' }} w="100%" pl="5px">
        <Text fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}>
          {index + 1} / {quizData.questions.length}
        </Text>
      </HStack>
      <SceneContainer variant="playScene">
        <Heading textAlign="center" fontSize={{ base: '20px', sm: '22px', md: '24px', lg: '26px' }}>
          {currentQuestion.question}
        </Heading>
        <RadioGroup isDisabled={showAnswer} w="100%" onChange={(e) => setQuizState((prev) => ({ ...prev, value: e }))}>
          <Flex gap={5} wrap="wrap" justifyContent="center">
            {currentQuestion.options?.map((option, i) => (
              <Radio
                showAnswer={showAnswer}
                isCorrectOption={showAnswer && option === currentQuestion.correctAnswer}
                isChecked={value === option}
                isUserPreviousChoice={userAnswers[index] === option}
                key={i}
                spacing="1rem"
                size={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
                value={option}
              >
                <Icon boxSize="1.5rem" as={renderIcon(option)} />
                {option}
              </Radio>
            ))}
          </Flex>
        </RadioGroup>
      </SceneContainer>
      <HStack mt="1.5rem" justifyContent="center" position="relative" width="full">
        {index > 0 && (
          <IconButton
            position="absolute"
            left="calc(50% - 10rem)"
            aria-label="previous-question"
            bg="none"
            icon={<ChevronLeftIcon boxSize="2rem" />}
            onClick={() => navigateQuestion('previous')}
          />
        )}
        <Spacer />
        <Button
          h="auto"
          padding="10px 20px"
          fontSize={{ base: '14px', sm: '16px', md: '18px', lg: '20px' }}
          colorScheme="yellow"
          onClick={checkAnswer}
          isDisabled={!value && !showAnswer}
        >
          {showAnswer ? 'Next Question' : 'Reveal Answer'}
        </Button>
        <Spacer />
      </HStack>
    </>
  );
};
