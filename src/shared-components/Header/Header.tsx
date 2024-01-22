import { Flex } from '@chakra-ui/react';

import { useAppContext } from '../../AppContext';
import { SceneEnum } from '../../utils';
import { DarkLightModeButton } from './DarkLightModeButton';
import { HeaderLogoButton } from './HeaderLogoButton';
import { HeaderContainerStyle } from './styles';

export const Header = () => {
  const { scene } = useAppContext();

  return (
    <Flex justifyContent={scene === SceneEnum.HOME ? 'flex-end' : 'space-between'} sx={HeaderContainerStyle}>
      {scene !== SceneEnum.HOME && <HeaderLogoButton />}
      <DarkLightModeButton />
    </Flex>
  );
};
