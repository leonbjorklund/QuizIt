import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

import { optionsStrings } from '../../assets/strings';
import { MainContainer } from '../../theme/MainContainer';

export const OptionsScene = () => {
  const { typeOfQuiz, amountOfQuestions, difficulty } = optionsStrings;

  return (
    <>
      <MainContainer gap="20px" w="550px">
        <Text>Customize your quiz</Text>

        <MainContainer p="10px" bg="blue.900" borderRadius="5px" gap="10px">
          <MainContainer variant="option">
            <Flex flexDirection="column" alignItems="center" gap="10px">
              <Text fontSize="26px">{typeOfQuiz.title}</Text>
              <RadioGroup defaultValue="1">
                <Stack spacing={16} direction="row">
                  <Radio value="1" fontSize="24px">
                    {typeOfQuiz.alternatives.trueFalse}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {typeOfQuiz.alternatives.multichoice}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </MainContainer>

          <MainContainer variant="option">
            <Flex flexDirection="column" alignItems="center">
              <Text fontSize="26px">{amountOfQuestions.title}</Text>
              <RadioGroup defaultValue="1">
                <Stack spacing={16} direction="row">
                  <Radio value="1" fontSize="24px">
                    {amountOfQuestions.alternatives.five}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {amountOfQuestions.alternatives.ten}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {amountOfQuestions.alternatives.fifteen}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {amountOfQuestions.alternatives.twenty}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </MainContainer>

          <MainContainer variant="option">
            <Flex flexDirection="column" alignItems="center">
              <Text fontSize="26px">{difficulty.title}</Text>
              <RadioGroup defaultValue="1">
                <Stack spacing={16} direction="row">
                  <Radio value="1" fontSize="24px">
                    {difficulty.alternatives.easy}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {difficulty.alternatives.medium}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {difficulty.alternatives.hard}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </MainContainer>
        </MainContainer>
      </MainContainer>
    </>
  );
};
