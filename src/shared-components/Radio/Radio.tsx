import { Box, Radio as ChakraRadio, RadioProps as ChakraRadioProps, useColorMode } from '@chakra-ui/react';
import React, { useMemo } from 'react';

import { QuizRadioContainerStyle } from './RadioStyles';
import { getRadioBackgroundColor } from './getRadioBackgroundColor';

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
  }, [isChecked, showAnswer, isCorrectOption, isUserPreviousChoice, colorMode]);

  const radioStyle = {
    ...QuizRadioContainerStyle,
    bgColor,
    display: bgColor ? 'block' : 'none',
    _hover: showAnswer ? {} : { opacity: '0.9' },
  };

  return (
    <Box sx={radioStyle}>
      <ChakraRadio {...props} />
    </Box>
  );
};
