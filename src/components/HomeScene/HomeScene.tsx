import { Heading, Text } from '@chakra-ui/react';

import { homeStrings } from '../../assets/strings';
import { QuizInputForm } from './components';

export const HomeScene = () => {
  const { subtitle } = homeStrings;

  return (
    <>
      <Heading fontSize={{ base: '42px', sm: '48px', md: '52px', lg: '56px' }} fontWeight="bold">
        QuizIt
      </Heading>
      <Text textAlign="center" mb=".4rem" fontSize={{ base: '16px', sm: '18px', md: '20px', lg: '22px' }}>
        {subtitle}
      </Text>
      <QuizInputForm />
    </>
  );
};
