import { Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import { OptionsData } from '.';
import { Scene } from '../../App';
import { optionsStrings } from '../../assets/strings';
import { SceneCard } from '../../chakra/SceneCard';
import { SceneContainer } from '../../chakra/SceneContainer';
import { Option } from './components';

interface IOptions {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

export const OptionsScene = ({ setScene }: IOptions) => {
  const isDesktop = useBreakpointValue({ base: false, sm: true });

  const { btns } = optionsStrings;

  console.log(OptionsData.options);

  return (
    <>
      <SceneContainer variant="optionsScene">
        <Text variant="optionsSceneTitle">Customize your quiz</Text>

        <SceneCard variant="optionsCard">
          {OptionsData.options.map((option, index: number) => (
            <Option key={index} title={option.title} alternatives={option.alternatives} />
          ))}
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
