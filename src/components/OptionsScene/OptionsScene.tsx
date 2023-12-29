import { Button, Flex, Radio, RadioGroup, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import { Scene } from '../../App';
import { optionsStrings } from '../../assets/strings';
import { SceneCard } from '../../chakra/SceneCard';
import { SceneContainer } from '../../chakra/SceneContainer';
import { OptionStyle } from './styles';

interface IOptions {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

export const OptionsScene = ({ setScene }: IOptions) => {
  const isDesktop = useBreakpointValue({ base: false, sm: true });

  const { typeOfQuiz, amountOfQuestions, difficulty, btns } = optionsStrings;

  return (
    <>
      <SceneContainer variant="optionsScene">
        <Text variant="optionsSceneTitle">Customize your quiz</Text>

        <SceneCard variant="optionsCard">
          <SceneCard variant="option">
            <Flex sx={OptionStyle}>
              <Text variant="optionTitle">{typeOfQuiz.title}</Text>
              <RadioGroup defaultValue={typeOfQuiz.alternatives.trueFalse} w="100%">
                <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
                  <Radio value={typeOfQuiz.alternatives.trueFalse} variant="optionAlt">
                    {typeOfQuiz.alternatives.trueFalse}
                  </Radio>
                  <Radio value={typeOfQuiz.alternatives.multichoice} variant="optionAlt">
                    {typeOfQuiz.alternatives.multichoice}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </SceneCard>

          <SceneCard variant="option">
            <Flex sx={OptionStyle}>
              <Text variant="optionTitle">{amountOfQuestions.title}</Text>
              <RadioGroup defaultValue={amountOfQuestions.alternatives.fifteen} w="100%">
                <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
                  <Radio value={amountOfQuestions.alternatives.five} variant="optionAlt">
                    {amountOfQuestions.alternatives.five}
                  </Radio>
                  <Radio value={amountOfQuestions.alternatives.ten} variant="optionAlt">
                    {amountOfQuestions.alternatives.ten}
                  </Radio>
                  <Radio value={amountOfQuestions.alternatives.fifteen} variant="optionAlt">
                    {amountOfQuestions.alternatives.fifteen}
                  </Radio>
                  <Radio value={amountOfQuestions.alternatives.twenty} variant="optionAlt">
                    {amountOfQuestions.alternatives.twenty}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </SceneCard>

          <SceneCard variant="option">
            <Flex sx={OptionStyle}>
              <Text variant="optionTitle">{difficulty.title}</Text>
              <RadioGroup defaultValue={difficulty.alternatives.medium} w="100%">
                <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
                  <Radio value={difficulty.alternatives.easy} variant="optionAlt">
                    {difficulty.alternatives.easy}
                  </Radio>
                  <Radio value={difficulty.alternatives.medium} variant="optionAlt">
                    {difficulty.alternatives.medium}
                  </Radio>
                  <Radio value={difficulty.alternatives.hard} variant="optionAlt">
                    {difficulty.alternatives.hard}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </SceneCard>
        </SceneCard>

        <Flex gap="1.5em" flexDirection={!isDesktop ? 'column-reverse' : 'row'} width={!isDesktop ? '100%' : 'auto'}>
          <Button variant="return" onClick={() => setScene(Scene.HOME)}>
            {btns.back}
          </Button>
          <Button variant="proceed" onClick={() => setScene(Scene.HOME)}>
            {btns.generate}
          </Button>
        </Flex>
      </SceneContainer>
    </>
  );
};
