import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, Heading, Icon, IconButton, RadioGroup, Text } from '@chakra-ui/react';

import { HeadingStyle } from '../../GlobalStyles';
import { playStrings } from '../../assets';
import { Radio, SceneCard, SceneContainer } from '../../chakra';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import {
  AnswerFlexStyle,
  BottomButtomStackStyle,
  PreviousQuestionButtonStyle,
  QuestionTextStyle,
  TopTextStackStyle,
} from './styles';
import useQuiz from './useQuiz';

export const PlayScene = () => {
  const { setScene, quizData, playQuizState, setPlayQuizState, quizInput } = useAppContext();
  const { index, currentQuestion, value, showAnswer, userAnswers } = playQuizState;

  const { btns } = playStrings;
  const isTrueFalse = quizInput.type === 'True/False';

  const { navigateQuestion, checkAnswer, renderIcon } = useQuiz();

  const handleOptionChange = (e) => {
    setPlayQuizState((prev) => ({ ...prev, value: e }));
  };

  return (
    <SceneContainer variant="playScene">
      <Heading sx={HeadingStyle} mb="1rem">
        {quizData.quiz.title}
      </Heading>
      <HStack sx={TopTextStackStyle}>
        <Text>
          {index + 1} / {quizData.quiz.questions.length}
        </Text>
        <Text>{quizInput.difficulty}</Text>
      </HStack>
      <SceneCard variant="playCard">
        <Heading sx={QuestionTextStyle}>{currentQuestion.question}</Heading>
        <RadioGroup isDisabled={showAnswer} w="100%" value={value} onChange={handleOptionChange}>
          <Flex sx={AnswerFlexStyle} flexWrap={isTrueFalse ? 'nowrap' : 'wrap'}>
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
            onClick={() => navigateQuestion('PREV')}
          />
        )}
        {index === quizData.quiz.questions.length - 1 && showAnswer ? (
          <Button variant="proceed" onClick={() => setScene(Scene.END)}>
            {btns.result}
          </Button>
        ) : (
          <Button variant="proceed" onClick={checkAnswer} isDisabled={!value && !showAnswer}>
            {showAnswer ? btns.next : btns.reveal}
          </Button>
        )}
      </HStack>
    </SceneContainer>
  );
};
