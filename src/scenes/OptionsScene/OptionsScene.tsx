import { Button, Flex, Heading } from '@chakra-ui/react';

import { useAppContext } from '../../AppContext';
import { ButtonFlexStyle, HeadingStyle } from '../../GlobalStyles';
import { optionsStrings } from '../../assets/strings';
import { SceneCard, SceneContainer } from '../../shared-components';
import { OptionType, OptionsDataType, Scene } from '../../utils/types';
import { Option } from './Option';

export const OptionsScene = () => {
  const { setScene, handleGenerateQuiz } = useAppContext();
  const { btns } = optionsStrings;

  const OptionsData: OptionsDataType = {
    options: [
      {
        title: 'Type of Quiz',
        alternatives: ['Multichoice', 'True/False'],
      },
      {
        title: 'Amount of Questions',
        alternatives: ['5', '10', '15'],
      },
      {
        title: 'Difficulty',
        alternatives: ['Easy', 'Medium', 'Hard'],
      },
    ],
  };

  return (
    <>
      <SceneContainer variant="optionsScene">
        <Heading sx={HeadingStyle}>Customize your Quiz</Heading>
        <SceneCard variant="optionsCard">
          {OptionsData.options.map((option: OptionType, index: number) => (
            <Option key={index} title={option.title} alternatives={option.alternatives} />
          ))}
        </SceneCard>

        <Flex sx={ButtonFlexStyle}>
          <Button variant="return" onClick={() => setScene(Scene.HOME)}>
            {btns.back}
          </Button>
          <Button variant="proceed" onClick={handleGenerateQuiz}>
            {btns.generate}
          </Button>
        </Flex>
      </SceneContainer>
    </>
  );
};
