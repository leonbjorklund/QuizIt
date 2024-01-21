import { Box, Radio as ChakraRadio, RadioProps as ChakraRadioProps, useColorMode } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import { QuizRadioContainerStyle, getRadioBackgroundColor } from '../..';

interface RadioProps extends ChakraRadioProps {
  isPlayQuizScene?: boolean;
  isChecked?: boolean;
  showAnswer?: boolean;
  isCorrectOption?: boolean;
  isUserPreviousChoice?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  isPlayQuizScene,
  isChecked = false,
  showAnswer = false,
  isCorrectOption = false,
  isUserPreviousChoice = false,
  ...props
}) => {
  const { colorMode } = useColorMode();

  const bgColor = useMemo(() => {
    if (!isPlayQuizScene) return undefined;
    return getRadioBackgroundColor({ isChecked, showAnswer, isCorrectOption, isUserPreviousChoice }, colorMode);
  }, [isPlayQuizScene, isChecked, showAnswer, isCorrectOption, isUserPreviousChoice, colorMode]);

  return (
    <Box
      bgColor={bgColor}
      display={isPlayQuizScene ? 'block' : 'none'}
      sx={{
        ...QuizRadioContainerStyle,
        ...(showAnswer ? {} : { _hover: { opacity: '0.9' } }),
      }}
    >
      <ChakraRadio {...props} />
    </Box>
  );
};
