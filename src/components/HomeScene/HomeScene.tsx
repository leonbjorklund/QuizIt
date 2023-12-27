import { CloseIcon, EditIcon, LinkIcon } from '@chakra-ui/icons';
import { Button, Image, Input, InputGroup, InputRightElement, Text, Textarea, useColorMode } from '@chakra-ui/react';

import { useState } from 'react';
import { Scene } from '../../App';
import { LogoBlack, OGLogo } from '../../assets/images';
import { homeStrings } from '../../assets/strings';
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
  const { subtitle, urlPlaceholder, textPlaceholder, continueBtn } = homeStrings;

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
      <Text textAlign="center">{subtitle}</Text>
      <InputGroup maxWidth="600px">
        {inputType === InputType.URL ? (
          <Input
            placeholder={urlPlaceholder}
            name="searchbar"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        ) : (
          <Textarea
            placeholder={textPlaceholder}
            name="searchbar"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        )}

        <InputRightElement>
          {inputValue !== '' ? (
            <Button variant="searchbarBtn" onClick={() => setInputValue('')}>
              <CloseIcon />
            </Button>
          ) : inputType === InputType.URL ? (
            <Button variant="searchbarBtn" onClick={handleSwitchInputType}>
              <EditIcon />
            </Button>
          ) : (
            <Button variant="searchbarBtn" onClick={handleSwitchInputType}>
              <LinkIcon />
            </Button>
          )}
        </InputRightElement>
      </InputGroup>
      <Button p="15px 30px" variant="proceed" mt="1rem" onClick={() => handleNextScene(Scene.PLAY)}>
        {continueBtn}
      </Button>
    </>
  );
};
