import { Button, Image, Text, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

import { Scene } from '../../App';
import { LogoBlack, OGLogo } from '../../assets/images';
import { homeStrings } from '../../assets/strings';
import { Form } from './components';
import { HomeSceneLogoStyle } from './styles';

interface IHomeScene {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const HomeScene = ({ setScene, inputValue, setInputValue }: IHomeScene) => {
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
      <Form inputValue={inputValue} setInputValue={setInputValue} isTouched={isTouched} setIsTouched={setIsTouched} />
      <Button variant="proceed" mt="1rem" onClick={() => handleNextScene(Scene.OPTIONS)}>
        {continueBtn}
      </Button>
    </>
  );
};
