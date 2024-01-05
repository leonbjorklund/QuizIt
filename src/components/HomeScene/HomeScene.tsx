import { Button, Image, Text, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

import { LogoBlack, OGLogo } from '../../assets/images';
import { homeStrings } from '../../assets/strings';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import { Form } from './components';
import { HomeSceneLogoStyle } from './styles';

export const HomeScene = () => {
  const { setScene, inputValue } = useAppContext();
  const { colorMode } = useColorMode();
  const { subtitle, continueBtn } = homeStrings;

  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleNextScene = (scene: Scene) => {
    if (inputValue === '') {
      setIsTouched(true);
      return;
    }
    setScene(scene);
  };

  return (
    <>
      <Image src={colorMode === 'dark' ? OGLogo : LogoBlack} alt="QuizItLogo" sx={HomeSceneLogoStyle} />
      <Text textAlign="center">{subtitle}</Text>
      <Form isTouched={isTouched} setIsTouched={setIsTouched} />
      <Button variant="proceed" mt="1rem" onClick={() => handleNextScene(Scene.OPTIONS)}>
        {continueBtn}
      </Button>
    </>
  );
};
