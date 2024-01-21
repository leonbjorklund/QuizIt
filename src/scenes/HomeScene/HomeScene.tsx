import { Heading, Text } from '@chakra-ui/react';

import { homeStrings } from '../../assets/strings';
import { QuizInputForm } from './QuizInputForm';
import { HomeSceneIntroTextStyle, HomeSceneLogoStyle } from './styles';

export const HomeScene = () => {
  const { subtitle } = homeStrings;

  return (
    <>
      <Heading sx={HomeSceneLogoStyle}>QuizIt</Heading>
      <Text sx={HomeSceneIntroTextStyle}>{subtitle}</Text>
      <QuizInputForm />
    </>
  );
};
