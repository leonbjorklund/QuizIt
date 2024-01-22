import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

import { useEffect } from 'react';
import { useAppContext } from '../../AppContext';
import { SceneCard } from '../../shared-components';
import { OptionType } from '../../utils/types';
import { OptionStackStyle } from './styles';

export const Option = ({ title, alternatives }: OptionType) => {
  const { setQuizInput } = useAppContext();

  const inputMap = {
    'Type of Quiz': 'type',
    'Amount of Questions': 'questionAmount',
    Difficulty: 'difficulty',
  };

  const handleRequestCustom = (title: string, alt: string) => {
    const inputProperty = inputMap[title];
    if (inputProperty) {
      setQuizInput((prevQuizInput) => ({
        ...prevQuizInput,
        [inputProperty]: alt,
      }));
    }
  };

  useEffect(() => {
    if (alternatives.length > 0) {
      handleRequestCustom(title, alternatives[0]);
    }
  }, [title, alternatives]);

  return (
    <SceneCard variant="option">
      <Text variant="optionTitle">{title}</Text>
      <RadioGroup defaultValue={alternatives[0]} w="100%">
        <Stack sx={OptionStackStyle}>
          {alternatives.map((alt) => (
            <Radio key={alt} value={alt} variant="optionAlt" onChange={() => handleRequestCustom(title, alt)}>
              {alt}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </SceneCard>
  );
};
