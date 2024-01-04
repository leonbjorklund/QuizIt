import { Button, Image, Text, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

import { useAtom } from 'jotai';
import { Scene, quizDataAtom } from '../../App';
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

  const [quizData, setQuizData] = useAtom(quizDataAtom);
  console.log(quizData);

  const [inputValue, setInputValue] = useState('');
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

  const sendToServer = (queryString: string) => {
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: queryString }),
    })
      .then((res) => res.json())
      .then((data) => setQuizData(data));
  };

  const handleNextScene = (scene: Scene) => {
    if (inputValue === '') {
      setIsTouched(true);
      return;
    }
    sendToServer(inputValue);
    // setScene(scene);
  };

  return (
    <>
      <Image src={colorMode === 'dark' ? OGLogo : LogoBlack} alt="QuizItLogo" sx={HomeSceneLogoStyle} />
      <Text textAlign="center">{subtitle}</Text>
      <Form inputValue={inputValue} setInputValue={setInputValue} isTouched={isTouched} setIsTouched={setIsTouched} />
      <Button variant="proceed" mt="1rem" onClick={() => handleNextScene(Scene.PLAY)}>
        {continueBtn}
      </Button>
    </>
  );
};
