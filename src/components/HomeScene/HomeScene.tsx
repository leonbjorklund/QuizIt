import { Heading, Text } from '@chakra-ui/react';

import { homeStrings } from '../../assets/strings';
import { QuizInputForm } from './components';

export const HomeScene = () => {
  const { subtitle } = homeStrings;

  return (
    <>
      <Heading fontSize={{ base: '40px', sm: '48px', md: '56px' }} fontWeight="bold">
        QuizIt
      </Heading>
      <Text textAlign="center" mb=".4rem" fontSize={{ base: '18px', sm: '20px', md: '22px' }}>
        {subtitle}
      </Text>
      <QuizInputForm />
    </>
  );
};
