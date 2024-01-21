import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

import { useEffect } from 'react';
import { useAppContext } from '../../AppContext';
import { SceneCard } from '../../shared-components';
import { OptionType } from '../../utils/types';
import { OptionStackStyle } from './styles';

export const Option = ({ title, alternatives }: OptionType) => {
  const { setQuizInput } = useAppContext();

  const handleRequestCustom = (title: string, alt: string) => {
    setQuizInput((prevQuizInput) => {
      const updatedQuizInput = { ...prevQuizInput };
      switch (title) {
        case 'Type of Quiz':
          updatedQuizInput.type = alt;
          break;
        case 'Amount of Questions':
          updatedQuizInput.questionAmount = alt;
          break;
        case 'Difficulty':
          updatedQuizInput.difficulty = alt;
          break;
        default:
      }
      return updatedQuizInput;
    });
  };

  useEffect(() => {
    if (alternatives.length > 0) {
      handleRequestCustom(title, alternatives[0]);
    }
  }, []);

  return (
    <SceneCard variant="option">
      <Text variant="optionTitle">{title}</Text>
      <RadioGroup defaultValue={alternatives[0]} w="100%">
        <Stack sx={OptionStackStyle}>
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
