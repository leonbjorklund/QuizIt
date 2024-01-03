import { Button, Image, Text, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

import { Scene } from '../../App';
import { LogoBlack, OGLogo } from '../../assets/images';
import { homeStrings } from '../../assets/strings';
import { Form } from './components';
import { HomeSceneLogoStyle } from './styles';

interface IHomeScene {
  setScene: React.Dispatch<React.SetStateAction<Scene>>;
}

export const HomeScene = ({ setScene }: IHomeScene) => {
  const { colorMode } = useColorMode();
  const { subtitle, continueBtn } = homeStrings;
  const [data, setData] = useState(null);

  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const sendToServer = (queryString: string) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: queryString }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const handleNextScene = (scene: Scene) => {
    if (inputValue === '') {
      setIsTouched(true);
      return;
    }
    sendToServer(inputValue);
    console.log(data);
  };

  return (
    <>
      <Image src={colorMode === 'dark' ? OGLogo : LogoBlack} alt="QuizItLogo" sx={HomeSceneLogoStyle} />
      <Text textAlign="center">{subtitle}</Text>
      <Form inputValue={inputValue} setInputValue={setInputValue} isTouched={isTouched} setIsTouched={setIsTouched} />
      <Button variant="proceed" mt="1rem" onClick={() => handleNextScene(Scene.OPTIONS)}>
        {continueBtn}
      </Button>
      <Text>{data}</Text>
    </>
  );
};
