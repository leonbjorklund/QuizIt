import { CloseIcon, EditIcon, LinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Textarea,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';

import { useState } from 'react';
import { Scene } from '../../App';
import { LogoBlack, OGLogo } from '../../assets/images';
import { homeStrings } from '../../assets/strings';
import { HomeSceneLogoStyle } from './styles';

interface IHomeScene {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

enum InputType {
  URL = 'url',
  TEXT = 'text',
}

export const HomeScene = ({ setScene }: IHomeScene) => {
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
            <Tooltip hasArrow label="Clear text" offset={[0, 10]}>
              <Button variant="ghost" onClick={() => setInputValue('')}>
                <CloseIcon />
              </Button>
            </Tooltip>
          ) : inputType === InputType.URL ? (
            <Tooltip hasArrow label="Text mode" offset={[0, 10]}>
              <Button variant="searchbarBtn" onClick={handleSwitchInputType}>
                <EditIcon />
              </Button>
            </Tooltip>
          ) : (
            <Tooltip hasArrow label="URL mode" offset={[0, 10]}>
              <Button variant="searchbarBtn" onClick={handleSwitchInputType}>
                <LinkIcon />
              </Button>
            </Tooltip>
          )}
        </InputRightElement>
      </InputGroup>
      <Button variant="proceed" mt="1rem" onClick={() => handleNextScene(Scene.OPTIONS)}>
        {continueBtn}
      </Button>
    </>
  );
};
