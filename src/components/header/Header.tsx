import { Flex, Image, useColorMode } from '@chakra-ui/react';

import { LogoBlack, OGLogo } from '../../assets/images';
import { DarkLightModeButton } from './DarkLightModeButton';
import { HeaderContainerStyle } from './styles';

export const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex sx={HeaderContainerStyle}>
      <Image
        src={colorMode === 'dark' ? OGLogo : LogoBlack}
        alt="QuizItLogo"
        width={{ base: '100px', sm: '125px', md: '150px' }}
      />
      <DarkLightModeButton />
    </Flex>
  );
};
