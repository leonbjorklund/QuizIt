import { CloseIcon, EditIcon, LinkIcon } from '@chakra-ui/icons';
import { Button, Image, Input, InputGroup, InputRightElement, Text, Textarea, useColorMode } from '@chakra-ui/react';

import { useState } from 'react';
import { Scene } from '../../App';
import { LogoBlack, OGLogo } from '../../assets/images';
import { HomeSceneLogoStyle } from './styles';

interface IHome {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

enum InputType {
  URL = 'url',
  TEXT = 'text',
}

export const HomeScene = ({ setScene }: IHome) => {
  const { colorMode } = useColorMode();

  const [inputType, setInputType] = useState<InputType>(InputType.URL);
  const [inputValue, setInputValue] = useState('');

  const handleNextScene = (scene: Scene) => {
    setScene(scene);
  };

  const handleSwitchInputType = () => {
    if (inputType === InputType.TEXT) {
      setInputType(InputType.URL);
    } else {
      setInputType(InputType.TEXT);
    }
  };

  return (
    <>
      <Image src={colorMode === 'dark' ? OGLogo : LogoBlack} alt="QuizItLogo" sx={HomeSceneLogoStyle} />
      <Text textAlign="center">Enter a URL below to generate a quiz about anything.</Text>
      <InputGroup maxWidth="600px">
        {inputType === InputType.URL ? (
          <Input
            mt=".25rem"
            placeholder="Enter URL here..."
            name="searchbar"
            size={{ base: 'sm', sm: 'md' }}
            border="none"
            py="1.4rem"
            pr="4rem"
            bg={colorMode === 'dark' ? '#2D3748' : '#E2E8EF'}
            _placeholder={{ color: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        ) : (
          <Textarea
            resize="none"
            height="15rem"
            mt=".25rem"
            placeholder="Enter your text here..."
            name="searchbar"
            pr="4rem"
            size={{ base: 'sm', sm: 'md' }}
            border="none"
            bg={colorMode === 'dark' ? '#2D3748' : '#E2E8EF'}
            _placeholder={{ color: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        )}

        <InputRightElement mt=".4rem" mr=".2rem">
          {inputValue !== '' ? (
            <Button variant="rounded" h=".5rem" onClick={() => setInputValue('')}>
              <CloseIcon color="rgba(255, 255, 255, 0.6)" />
            </Button>
          ) : inputType === InputType.URL ? (
            <Button onClick={handleSwitchInputType}>
              <EditIcon color="rgba(255, 255, 255, 0.6)" />
            </Button>
          ) : (
            <Button onClick={handleSwitchInputType}>
              <LinkIcon color="rgba(255, 255, 255, 0.6)" />
            </Button>
          )}
        </InputRightElement>
      </InputGroup>
      <Button
        p="15px 30px"
        variant="proceed"
        mt="1rem"
        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
        onClick={() => handleNextScene(Scene.PLAY)}
      >
        Continue
      </Button>
    </>
  );
};
