import { Text } from '@chakra-ui/react';

import { useAppContext } from '../../context/AppContext';

export const PlayScene = () => {
  const { quizData } = useAppContext();

  if (!quizData) {
    return <div>Loading...</div>;
  }
  console.log(quizData);

  // const {
  //   index,
  //   currentQuestion,
  //   value,
  //   showAnswer,
  //   // score, Används senare
  //   userAnswers,
  //   setQuizState,
  //   navigateQuestion,
  //   checkAnswer,
  //   renderIcon,
  // } = useQuiz();

  return (
    <Text>PlayScene</Text>
    // <SceneContainer variant="playScene">
    //   <HStack sx={TopTextStackStyle}>
    //     <Text>
    //       {/* {index + 1} / {quizData.quiz.questions.length} */}
    //       {/* <Text>{JSON.stringify(quizData, null, 2)}</Text> */}
    //     </Text>
    //   </HStack>
    //   <SceneCard variant="playCard">
    //     <Heading sx={QuestionTextStyle}>{currentQuestion.question}</Heading>
    //     <RadioGroup
    //       isDisabled={showAnswer}
    //       w="100%"
    //       value={value}
    //       onChange={(e) => setQuizState((prev) => ({ ...prev, value: e }))}
    //     >
    //       <Flex sx={AnswerFlexStyle}>
    //         {currentQuestion.options?.map((option, i) => (
    //           <Radio
    //             variant="playQuiz"
    //             key={i}
    //             isPlayQuizScene
    //             value={option}
    //             showAnswer={showAnswer}
    //             isCorrectOption={showAnswer && option === currentQuestion.answer}
    //             isChecked={value === option}
    //             isUserPreviousChoice={userAnswers[index] === option}
    //           >
    //             <Icon boxSize="1.5rem" as={renderIcon(option)} />
    //             {option}
    //           </Radio>
    //         ))}
    //       </Flex>
    //     </RadioGroup>
    //   </SceneCard>
    //   <HStack sx={BottomButtomStackStyle}>
    //     {index > 0 && (
    //       <IconButton
    //         sx={PreviousQuestionButtonStyle}
    //         icon={<ChevronLeftIcon boxSize="2rem" />}
    //         aria-label="previous-question"
    //         onClick={() => navigateQuestion('previous')}
    //       />
    //     )}
    //     <Button sx={ProceedButtonStyle} variant="proceed" onClick={checkAnswer} isDisabled={!value && !showAnswer}>
    //       {showAnswer ? 'Next Question' : 'Reveal Answer'}
    //     </Button>
    //   </HStack>
    // </SceneContainer>
  );
};
