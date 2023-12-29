import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface CustomBoxProps {
  bgColor: string;
  children: ReactNode;
}

interface BackgroundColorOptions {
  isCorrectOption: boolean;
  showAnswer: boolean;
  isChecked: boolean;
  isUserPreviousChoice: boolean;
}

export function getBackgroundColor(options: BackgroundColorOptions): string {
  const { isCorrectOption, showAnswer, isChecked, isUserPreviousChoice } = options;

  if (isCorrectOption) return 'green.600';
  if (showAnswer && !isCorrectOption && (isChecked || isUserPreviousChoice)) return 'red.600';
  return 'blue.700';
}

export const PlayQuizRadioContainer: React.FC<CustomBoxProps> = ({ bgColor, children }) => {
  return (
    <Box
      w="100%"
      maxWidth={{ base: '360px', sm: '380px', md: '260px', lg: '360px' }}
      borderRadius="5px"
      bgColor={bgColor || 'blue.700'}
    >
      {children}
    </Box>
  );
};
