interface BackgroundColorOptions {
  isCorrectOption: boolean;
  showAnswer: boolean;
  isChecked: boolean;
  isUserPreviousChoice: boolean;
}

export const getRadioBackgroundColor = (options: BackgroundColorOptions, colorMode: string): string => {
  const { isCorrectOption, showAnswer, isChecked, isUserPreviousChoice } = options;

  // Determine color based on quiz logic
  if (isCorrectOption) return colorMode === 'light' ? 'green.600' : 'green.600';
  if (showAnswer && !isCorrectOption && (isChecked || isUserPreviousChoice))
    return colorMode === 'light' ? 'red.600' : 'red.600';

  // Apply color based on the color mode
  return colorMode === 'light' ? 'gray.400' : 'blue.700';
};
