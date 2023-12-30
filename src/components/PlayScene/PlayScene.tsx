import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, Heading, Icon, IconButton, RadioGroup, Text } from '@chakra-ui/react';
import { Radio } from '../../chakra/Radio';

import { SceneCard, SceneContainer } from '../../chakra';
import quizData from './quizData.json';
import {
  AnswerFlexStyle,
  BottomButtomStackStyle,
  PreviousQuestionButtonStyle,
  ProceedButtonStyle,
  QuestionTextStyle,
  TopTextStackStyle,
} from './styles';
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
    <SceneContainer variant="playScene">
      <HStack sx={TopTextStackStyle}>
        <Text>
          {index + 1} / {quizData.questions.length}
        </Text>
      </HStack>
      <SceneCard variant="playCard">
        <Heading sx={QuestionTextStyle}>{currentQuestion.question}</Heading>
        <RadioGroup
          isDisabled={showAnswer}
          w="100%"
          value={value}
          onChange={(e) => setQuizState((prev) => ({ ...prev, value: e }))}
        >
          <Flex sx={AnswerFlexStyle}>
            {currentQuestion.options?.map((option, i) => (
              <Radio
                variant="playQuiz"
                key={i}
                isPlayQuizScene
                value={option}
                showAnswer={showAnswer}
                isCorrectOption={showAnswer && option === currentQuestion.correctAnswer}
                isChecked={value === option}
                isUserPreviousChoice={userAnswers[index] === option}
              >
                <Icon boxSize="1.5rem" as={renderIcon(option)} />
                {option}
              </Radio>
            ))}
          </Flex>
        </RadioGroup>
      </SceneCard>
      <HStack sx={BottomButtomStackStyle}>
        {index > 0 && (
          <IconButton
            sx={PreviousQuestionButtonStyle}
            icon={<ChevronLeftIcon boxSize="2rem" />}
            aria-label="previous-question"
            onClick={() => navigateQuestion('previous')}
          />
        )}
        <Button sx={ProceedButtonStyle} variant="proceed" onClick={checkAnswer} isDisabled={!value && !showAnswer}>
          {showAnswer ? 'Next Question' : 'Reveal Answer'}
        </Button>
      </HStack>
    </SceneContainer>
  );
};
