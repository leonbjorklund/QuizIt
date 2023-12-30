import { radioAnatomy } from '@chakra-ui/anatomy';
import {
  Box,
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
  createMultiStyleConfigHelpers,
  useColorMode,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { getRadioBackgroundColor, quizRadioContainerStyle } from '../components';

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
    <Box bgColor={bgColor} display={isPlayQuizScene ? 'block' : 'none'} sx={quizRadioContainerStyle}>
      <ChakraRadio {...props} />
    </Box>
  );
};
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  // containern runt hela radion
  container: {
    borderRadius: '5px',
    // satte till röd nu så du ser den
    bg: 'red',
    padding: '10px',
  },
  // själva radioknappen, den lilla cirkeln
  control: {
    color: 'white!important',
    borderColor: 'white!important',
    background: 'transparent!important',
  },
  // texten bredvid radioknappen
  label: {
    fontFamily: 'Dosis, sans-serif',
    fontSize: {
      base: '18px',
      sm: '20px',
      md: '22px',
      lg: '24px',
    },
    _checked: {
      fontWeight: 'medium',
    },
  },
});

const variants = {
  playQuiz: definePartsStyle({
    container: {
      boxShadow: 'md',
      width: '100%',
      bg: 'transparent',
      padding: {
        base: '8px',
        sm: '10px',
        md: '12px',
      },
      _checked: {
        outline: '1px solid white',
        _light: {
          outline: '1px solid',
          outlineColor: 'gray.500',
        },
      },
    },
    control: {
      display: 'none',
    },
    label: {
      fontSize: {
        base: '16px',
        sm: '18px',
        md: '20px',
        lg: '22px',
      },
      display: 'flex',
      alignItems: 'center',
      gap: '.75rem',
      margin: '0',
      _disabled: {
        opacity: 1,
      },
    },
  }),
  placeHolderVariant: definePartsStyle({
    container: {},
    control: {},
    label: {},
  }),
};

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
});
