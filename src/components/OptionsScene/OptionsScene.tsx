import { Button, Flex, Text } from '@chakra-ui/react';

import { useState } from 'react';
import { OptionsData } from '.';
import { Scene } from '../../App';
import { optionsStrings } from '../../assets/strings';
import { SceneCard } from '../../chakra/SceneCard';
import { SceneContainer } from '../../chakra/SceneContainer';
import { Option } from './components';

interface IOptionsScene {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

interface OptionType {
  title: string;
  alternatives: string[];
}

export const OptionsScene = ({ setScene }: IOptionsScene) => {
  const { btns } = optionsStrings;

  const defaultQuizRequest = {
    type: OptionsData.options[0].alternatives[1],
    amount: OptionsData.options[1].alternatives[1],
    difficulty: OptionsData.options[2].alternatives[1],
  };

  const [customQuizReq, setCustomQuizReq] = useState(defaultQuizRequest);

  const handleGenerateQuiz = () => {
    setScene(Scene.PLAY);
    console.log('Generated Quiz:', customQuizReq);
  };

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
