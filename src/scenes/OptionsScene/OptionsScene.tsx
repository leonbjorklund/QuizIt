import { Button, Flex, Heading } from '@chakra-ui/react';

import { useAppContext } from '../../AppContext';
import { optionsStrings } from '../../assets/strings';
import { SceneCard, SceneContainer } from '../../shared-components';
import { ButtonFlexStyle, HeadingStyle, OptionType, OptionsDataType, SceneEnum } from '../../utils/';
import { Option } from './Option';

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
const renderOption = (option: OptionType, index: number) => (
  <Option key={option.title} title={option.title} alternatives={option.alternatives} />
);

export const OptionsScene = () => {
  const { setScene, handleGenerateQuiz } = useAppContext();

  return (
    <>
      <SceneContainer variant="optionsScene">
        <Heading sx={HeadingStyle}>Customize Quiz</Heading>
        <SceneCard variant="optionsCard">{OptionsData.options.map(renderOption)}</SceneCard>

        <Flex sx={ButtonFlexStyle}>
          <Button variant="return" onClick={() => setScene(SceneEnum.HOME)}>
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
