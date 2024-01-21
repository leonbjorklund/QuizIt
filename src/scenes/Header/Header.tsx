import { Flex } from '@chakra-ui/react';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import { DarkLightModeButton } from './DarkLightModeButton';
import { HeaderLogoButton } from './HeaderLogoButton';
import { HeaderContainerStyle } from './styles';

export const Header = () => {
  const { scene } = useAppContext();

  return (
    <Flex justifyContent={scene === Scene.HOME ? 'flex-end' : 'space-between'} sx={HeaderContainerStyle}>
      {scene !== Scene.HOME && <HeaderLogoButton />}
      <DarkLightModeButton />
    </Flex>
  );
};
