import { Button, Flex, Text } from '@chakra-ui/react';

import { OptionsData } from '.';
import { Scene } from '../../App';
import { optionsStrings } from '../../assets/strings';
import { SceneCard } from '../../chakra/SceneCard';
import { SceneContainer } from '../../chakra/SceneContainer';
import { Option } from './components';

interface IOptionsScene {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
  setCustomQuizReq: React.Dispatch<
    React.SetStateAction<{
      type: string;
      amount: string;
      difficulty: string;
    }>
  >;
  handleGenerateQuiz: () => void;
}

interface OptionType {
  title: string;
  alternatives: string[];
}

export const OptionsScene = ({ setScene, setCustomQuizReq, handleGenerateQuiz }: IOptionsScene) => {
  const { btns } = optionsStrings;

  return (
    <>
      <SceneContainer variant="optionsScene">
        <Text variant="optionsSceneTitle">Customize your quiz</Text>

        <SceneCard variant="optionsCard">
          {OptionsData.options.map((option: OptionType, index: number) => (
            <Option
              key={index}
              title={option.title}
              alternatives={option.alternatives}
              setCustomQuizReq={setCustomQuizReq}
            />
          ))}
        </SceneCard>

        <Flex gap="1.5em" flexDirection={{ base: 'column-reverse', sm: 'row' }} width={{ base: '100%', sm: 'auto' }}>
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
