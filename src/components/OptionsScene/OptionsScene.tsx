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
              <RadioGroup defaultValue="1">
                <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
                  <Radio value="1" variant="optionAlt">
                    {typeOfQuiz.alternatives.trueFalse}
                  </Radio>
                  <Radio value="2" variant="optionAlt">
                    {typeOfQuiz.alternatives.multichoice}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </SceneCard>
          <SceneCard variant="option">
            <Flex sx={OptionStyle}>
              <Text variant="optionTitle">{amountOfQuestions.title}</Text>
              <RadioGroup defaultValue="1">
                <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
                  <Radio value="1" variant="optionAlt">
                    {amountOfQuestions.alternatives.five}
                  </Radio>
                  <Radio value="2" variant="optionAlt">
                    {amountOfQuestions.alternatives.ten}
                  </Radio>
                  <Radio value="3" variant="optionAlt">
                    {amountOfQuestions.alternatives.fifteen}
                  </Radio>
                  <Radio value="4" variant="optionAlt">
                    {amountOfQuestions.alternatives.twenty}
                  </Radio>
                </Stack>
              </RadioGroup>
            </Flex>
          </SceneCard>
          <SceneCard variant="option">
            <Flex sx={OptionStyle}>
              <Text variant="optionTitle">{difficulty.title}</Text>
              <RadioGroup defaultValue="1">
                <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
                  <Radio value="1" variant="optionAlt">
                    {difficulty.alternatives.easy}
                  </Radio>
                  <Radio value="2" variant="optionAlt">
                    {difficulty.alternatives.medium}
                  </Radio>
                  <Radio value="3" variant="optionAlt">
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
