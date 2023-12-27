import { Button, Flex, Heading, RadioGroup, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { MainContainer } from '../../theme/MainContainer';
import quizData from './quizData.json';

import { Radio } from './Radio'; // import your custom Radio component

export const PlayScene = () => {
  console.log('quizData', quizData);

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(quizData.questions[index]);
  const [value, setValue] = useState('');

  const checkAnswer = () => {
    if (value === question.correctAnswer) {
      console.log('Correct');
    } else {
      console.log('Wrong');
    }
  };

  return (
    <>
      <Text>1 / 5 questions</Text>
      <MainContainer variant="playScene">
        <Heading size="md">{question.question}</Heading>
        <RadioGroup w="100%" onChange={setValue} value={value}>
          <Flex gap={5} wrap="wrap" justifyContent="space-between">
            {question.options.map((option, i) => (
              <Radio
                isCorrectOption={option === question.correctAnswer}
                key={i}
                spacing="1rem"
                size="xl"
                value={option}
              >
                {option}
              </Radio>
            ))}
          </Flex>
        </RadioGroup>
        <Button colorScheme="yellow" onClick={checkAnswer}>
          Reveal Answer
        </Button>
      </MainContainer>
    </>
  );
};
