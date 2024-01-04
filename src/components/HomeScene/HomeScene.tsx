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
  // useEffect(() => {
  //   if (quizData) {
  //     localStorage.setItem('quizData', JSON.stringify(quizData));
  //   }
  // }, [quizData]); // Dependency array with quizData, to run this effect when quizData changes
  // useEffect(() => {
  //   // Retrieve data from local storage
  //   const storedQuizData = localStorage.getItem('quizData');

  //   // Check if there is any data in local storage
  //   if (storedQuizData) {
  //     // Parse the stored string back into an object
  //     const quizData = JSON.parse(storedQuizData);

  //     // Console log the retrieved data
  //     console.log(quizData);
  //   } else {
  //     // Handle the case where there is no data in local storage
  //     console.log('No quizData found in local storage.');
  //   }
  // }, []);

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
