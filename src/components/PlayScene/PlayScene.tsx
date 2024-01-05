import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, Heading, Icon, IconButton, RadioGroup, Text } from '@chakra-ui/react';

import { playStrings } from '../../assets';
import { Radio, SceneCard, SceneContainer } from '../../chakra';
import { useAppContext } from '../../context/AppContext';
import { NavigateQuestion, Scene } from '../../utils/types';
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
  const { quizData, setScene } = useAppContext();
  const { btns } = playStrings;

  const {
    index,
    currentQuestion,
    value,
    showAnswer,
    score /* ANVÄNDS SENARE */,
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
          {index + 1} / {quizData.quiz.questions.length}
          {/* <Text>{JSON.stringify(quizData, null, 2)}</Text> */}
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
                isCorrectOption={showAnswer && option === currentQuestion.answer}
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
            onClick={() => navigateQuestion(NavigateQuestion.PREV)}
          />
        )}
        {index === quizData.quiz.questions.length -1 && showAnswer ? (
          <Button variant="proceed" onClick={() => setScene(Scene.END)}>
            {btns.result}
          </Button>
        ) : (
          <Button sx={ProceedButtonStyle} variant="proceed" onClick={checkAnswer} isDisabled={!value && !showAnswer}>
            {showAnswer ? btns.next : btns.reveal}
          </Button>
        )}
      </HStack>
    </SceneContainer>
  );
};
