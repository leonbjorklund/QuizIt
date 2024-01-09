import { Flex, Heading } from '@chakra-ui/react';

import { HeaderLogoStyle } from '../../GlobalStyles';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import { DarkLightModeButton } from './DarkLightModeButton';
import { HeaderContainerStyle } from './styles';

export const Header = () => {
  const { scene, setScene } = useAppContext();

  return (
    <Flex justifyContent={scene === Scene.HOME ? 'flex-end' : 'space-between'} sx={HeaderContainerStyle}>
      {scene !== Scene.HOME && (
        <Heading sx={HeaderLogoStyle} onClick={() => setScene(Scene.HOME)}>
          QuizIt
        </Heading>
      )}
      <DarkLightModeButton />
    </Flex>
  );
};
