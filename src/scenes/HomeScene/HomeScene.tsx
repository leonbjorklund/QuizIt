import { Heading, Text } from '@chakra-ui/react';

import { homeStrings } from '../../assets/';
import { SceneContainer } from '../../shared-components';
import { QuizInputForm } from './QuizInputForm';
import { HomeSceneIntroTextStyle, HomeSceneLogoStyle } from './styles';

const { subtitle } = homeStrings;

export const HomeScene = () => {
  return (
    <SceneContainer variant="homeScene">
      <Heading sx={HomeSceneLogoStyle}>QuizIt</Heading>
      <Text sx={HomeSceneIntroTextStyle}>{subtitle}</Text>
      <QuizInputForm />
    </SceneContainer>
  );
};
