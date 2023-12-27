import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';

export const DarkLightModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <MoonIcon color="gray.600" /> : <SunIcon color="yellow.200" />}
      aria-label="Toggle color mode"
    />
  );
};
