import { Button, Flex, Heading } from '@chakra-ui/react';

import { OptionsData } from '.';
import { useAppContext } from '../../AppContext';
import { ButtonFlexStyle, HeadingStyle } from '../../GlobalStyles';
import { optionsStrings } from '../../assets/strings';
import { SceneCard } from '../../sharedcomponents/Wrappers/SceneCard';
import { SceneContainer } from '../../sharedcomponents/Wrappers/SceneContainer';
import { OptionType, Scene } from '../../utils/types';
import { Option } from './components';

export const OptionsScene = () => {
  const { setScene, handleGenerateQuiz } = useAppContext();

  const { btns } = optionsStrings;

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
