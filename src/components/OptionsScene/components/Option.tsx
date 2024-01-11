import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

import { useEffect } from 'react';
import { SceneCard } from '../../../chakra';
import { useAppContext } from '../../../context/AppContext';
import { OptionType } from '../../../utils/types';

export const Option = ({ title, alternatives }: OptionType) => {
  const { setQuizInput } = useAppContext();

  const handleRequestCustom = (title: string, alt: string) => {
    setQuizInput((prevQuizInput) => {
      const updatedQuizInput = { ...prevQuizInput };
      switch (title) {
        case 'Type of quiz':
          updatedQuizInput.type = alt;
          break;
        case 'Amount of questions':
          updatedQuizInput.questionAmount = alt;
          break;
        case 'Difficulty':
          updatedQuizInput.difficulty = alt;
          break;
        default:
        // Handle any other titles or log an error
      }
      return updatedQuizInput;
    });
  };

  useEffect(() => {
    if (alternatives.length > 0) {
      handleRequestCustom(title, alternatives[0]);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <SceneCard variant="option">
      <Text variant="optionTitle">{title}</Text>
      <RadioGroup defaultValue={alternatives[0]} w="100%">
        <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
          {alternatives.map((alt: string, index: number) => (
            <Radio key={index} value={alt} variant="optionAlt" onChange={() => handleRequestCustom(title, alt)}>
              {alt}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </SceneCard>
  );
};
