import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { SceneCard } from '../../../chakra/SceneCard';
import { useAppContext } from '../../../context/AppContext';

interface IOption {
  title: string;
  alternatives: string[];
}

export const Option = ({ title, alternatives }: IOption) => {
  const { setCustomQuizReq } = useAppContext();

  const handleRequestCustom = (title: string, alt: string) => {
    if (title === 'Type of quiz') {
      setCustomQuizReq((prevCustomQuizReq) => ({
        ...prevCustomQuizReq,
        type: alt,
      }));
    } else if (title === 'Amount of questions') {
      setCustomQuizReq((prevCustomQuizReq) => ({
        ...prevCustomQuizReq,
        amount: alt,
      }));
    } else if (title === 'Difficulty') {
      setCustomQuizReq((prevCustomQuizReq) => ({
        ...prevCustomQuizReq,
        difficulty: alt,
      }));
    }
  };

  return (
    <SceneCard variant="option">
      <Text variant="optionTitle">{title}</Text>
      <RadioGroup defaultValue={alternatives[1]} w="100%">
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
