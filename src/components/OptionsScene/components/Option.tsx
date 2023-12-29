import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { SceneCard } from '../../../chakra/SceneCard';
import { OptionStyle } from './styles';

interface IOption {
  title: string;
  alternatives: string[];
}

export const Option = ({ title, alternatives }: IOption) => {
  return (
    <SceneCard variant="option">
      <Flex sx={OptionStyle}>
        <Text variant="optionTitle">{title}</Text>
        <RadioGroup defaultValue={alternatives[1]} w="100%">
          <Stack spacing={{ base: '.5rem', sm: '1.5rem', md: '2.5rem' }} direction="row">
            {alternatives.map((alt, index) => (
              <Radio key={index} value={alt} variant="optionAlt">
                {alt}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Flex>
    </SceneCard>
  );
};
