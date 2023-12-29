import { Button, Flex, Radio, RadioGroup, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import { Scene } from '../../App';
import { optionsStrings } from '../../assets/strings';
import { MainContainer } from '../../theme/MainContainer';

interface IOptions {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

export const OptionsScene = ({ setScene }: IOptions) => {
  const isDesktop = useBreakpointValue({ base: false, sm: true });

  const { typeOfQuiz, amountOfQuestions, difficulty, btns } = optionsStrings;

  return (
    <>
      <MainContainer gap="20px">
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
              <RadioGroup defaultValue="2">
                <Stack spacing={16} direction="row">
                  <Radio value="1" fontSize="24px">
                    {amountOfQuestions.alternatives.five}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {amountOfQuestions.alternatives.ten}
                  </Radio>
                  <Radio value="3" fontSize="24px" isChecked>
                    {amountOfQuestions.alternatives.fifteen}
                  </Radio>
                  <Radio value="4" fontSize="24px" isChecked>
                    {amountOfQuestions.alternatives.twenty}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </MainContainer>

          <MainContainer variant="option">
            <Flex flexDirection="column" alignItems="center">
              <Text fontSize="26px">{difficulty.title}</Text>
              <RadioGroup defaultValue="2">
                <Stack spacing={16} direction="row">
                  <Radio value="1" fontSize="24px">
                    {difficulty.alternatives.easy}
                  </Radio>
                  <Radio value="2" fontSize="24px" isChecked>
                    {difficulty.alternatives.medium}
                  </Radio>
                  <Radio value="3" fontSize="24px" isChecked>
                    {difficulty.alternatives.hard}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </MainContainer>
        </MainContainer>

        <Flex gap="1.5em" flexDirection={!isDesktop ? 'column-reverse' : 'row'} width={!isDesktop ? '100%' : 'auto'}>
          <Button variant="return" onClick={() => setScene(Scene.HOME)}>
            {btns.back}
          </Button>
          <Button variant="proceed" onClick={() => setScene(Scene.HOME)}>
            {btns.generate}
          </Button>
        </Flex>
      </MainContainer>
    </>
  );
};
