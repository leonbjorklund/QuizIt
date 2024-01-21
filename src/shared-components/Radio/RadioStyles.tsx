import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

export const QuizRadioContainerStyle = {
  w: '100%',
  maxWidth: { base: '360px', sm: '380px', md: '260px', lg: '360px' },
  borderRadius: '5px',
};

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: '5px',
    padding: '10px',
  },
  control: {
    color: 'white!important',
    borderColor: 'white!important',
    background: 'transparent!important',
    _light: {
      color: 'white!important',
      borderColor: 'red!important',
    },
  },
  label: {
    color: 'white',
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
      height: '100%',
      bg: 'transparent',
      padding: {
        base: '8px',
        sm: '10px',
        md: '10px',
        lg: '12px',
      },
      _checked: {
        outline: '1px solid white',
        _light: {
          outline: '1px solid white',
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
  optionAlt: definePartsStyle({
    container: {
      bg: 'transparent',
      color: '#FFF',
      width: '100%',
      justifyContent: 'center',
    },
    control: {},
    label: {
      fontSize: {
        base: '16px',
        sm: '18px',
        md: '20px',
        lg: '22px',
      },
    },
  }),
};

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
});
