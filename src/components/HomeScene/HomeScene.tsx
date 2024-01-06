import { Button, Heading, Text, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

import { homeStrings } from '../../assets/strings';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import { Form } from './components';

export const HomeScene = () => {
  const { setScene, inputValue, setInputValue } = useAppContext();
  const { colorMode } = useColorMode();
  const { subtitle, continueBtn } = homeStrings;

  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleNextScene = (scene: Scene) => {
    if (inputValue === '') {
      setIsTouched(true);
      return;
    }
    setInputValue('');
    setScene(scene);
  };

  return (
    <>
      <Heading fontSize={{ base: '38px', sm: '44px', md: '52px' }} fontWeight="bold">
        QuizIt
      </Heading>
      <Text textAlign="center">{subtitle}</Text>
      <Form isTouched={isTouched} setIsTouched={setIsTouched} />
      <Button variant="proceed" mt="1rem" onClick={() => handleNextScene(Scene.OPTIONS)}>
        {continueBtn}
      </Button>
    </>
  );
};
