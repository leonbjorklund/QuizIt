import { Button, Image, Input, Text, useColorMode } from '@chakra-ui/react';

import { Scene } from '../../App';
import { LogoBlack, OGLogo } from '../../assets/images';
import { HomeSceneLogoStyle } from './styles';

interface IHome {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

export const HomeScene = ({ setScene }: IHome) => {
  const { colorMode } = useColorMode();

  const handleNextScene = (scene: Scene) => {
    setScene(scene);
  };

  return (
    <>
      <Image src={colorMode === 'dark' ? OGLogo : LogoBlack} alt="QuizItLogo" sx={HomeSceneLogoStyle} />
      <Text textAlign="center">Enter a URL below to generate a quiz about anything.</Text>
      <Input maxWidth="600px" mt=".25rem" placeholder="Enter URL here..." />
      <Button
        p="15px 30px"
        variant="proceed"
        mt="1rem"
        fontSize={{ base: 'xs', sm: 'sm' }}
        onClick={() => handleNextScene(Scene.PLAY)}
      >
        Continue
      </Button>
    </>
  );
};
