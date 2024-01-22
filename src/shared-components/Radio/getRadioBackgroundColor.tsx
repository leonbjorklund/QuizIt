interface BackgroundColorOptions {
  isCorrectOption: boolean;
  showAnswer: boolean;
  isChecked: boolean;
  isUserPreviousChoice: boolean;
}

const CORRECT_OPTION_COLOR = 'green.600';
const INCORRECT_OPTION_COLOR = 'red.600';
const LIGHT_MODE_COLOR = 'gray.500';
const DARK_MODE_COLOR = 'blue.700';

export const getRadioBackgroundColor = (options: BackgroundColorOptions, colorMode: string): string => {
  const { isCorrectOption, showAnswer, isChecked, isUserPreviousChoice } = options;

  if (isCorrectOption) return CORRECT_OPTION_COLOR;
  if (showAnswer && !isCorrectOption && (isChecked || isUserPreviousChoice)) return INCORRECT_OPTION_COLOR;

  return colorMode === 'light' ? LIGHT_MODE_COLOR : DARK_MODE_COLOR;
};
