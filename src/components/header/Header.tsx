import { Flex, Heading } from '@chakra-ui/react';

import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import { DarkLightModeButton } from './DarkLightModeButton';
import { HeaderContainerStyle } from './styles';

export const Header = () => {
  const { setScene, setScore, setQuizData } = useAppContext();

  return (
    <Flex sx={HeaderContainerStyle}>
      <Heading
        fontSize={{ base: '38px', sm: '44px', md: '52px' }}
        sx={{ cursor: 'pointer' }}
        fontWeight="bold"
        onClick={() => {
          setScore(0);
          setQuizData(null);
          setScene(Scene.HOME);
        }}
      >
        QuizIt
      </Heading>
      <DarkLightModeButton />
    </Flex>
  );
};
