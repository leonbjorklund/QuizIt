import { defineStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  secondary: 'blue.900',
  correct: 'green.600',
  wrong: 'red.600',
  proceedButton: 'yellow.200',
  selected: 'blue.700',
  backButtonBorder: 'rgb(255, 255, 255, 0.4)', // white with 40% opacity
};

const fonts = {
  body: 'Poppins, sans-serif',
};

const layerStyle = {
  base: {
    bg: colors.selected,
    border: '2px solid',
    borderColor: colors.selected,
    color: '#FFF',
    boxShadow: '4px 4px rgba(0, 0, 0, .25)',
    borderRadius: '5px',
  },
  selected: {
    bg: colors.selected,
    border: '2px solid',
    borderColor: '#FFF',
    color: '#FFF',
    boxShadow: '4px 4px rgba(0, 0, 0, .25)',
    borderRadius: '5px',
  },
  correctAnswer: {
    bg: colors.correct,
    border: '2px solid',
    borderColor: colors.correct,
    color: '#FFF',
    boxShadow: '4px 4px rgba(0, 0, 0, .25)',
    borderRadius: '5px',
  },
  correctAnswerSelected: {
    bg: colors.correct,
    border: '2px solid',
    borderColor: '#FFF',
    color: '#FFF',
    boxShadow: '4px 4px rgba(0, 0, 0, .25)',
    borderRadius: '5px',
  },
  wrongAnswerSelected: {
    bg: colors.wrong,
    border: '2px solid',
    borderColor: '#FFF',
    color: '#FFF',
    boxShadow: '4px 4px rgba(0, 0, 0, .25)',
    borderRadius: '5px',
  },
};

const MainContainer = defineStyleConfig({
  baseStyle: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  variants: {
    primary: {
      color: 'red',
    },
  },
});

const components = {
  Header: {
    color: 'red',
  },
  Text: {
    baseStyle: {
      fontFamily: 'Dosis, sans-serif',
    },
  },
  Button: {
    baseStyle: {
      fontFamily: 'Dosis, sans-serif',
      borderRadius: '5px',
    },
    variants: {
      proceed: {
        bg: colors.proceedButton,
        color: 'black',
        _hover: {
          bg: 'yellow.100',
          color: 'black',
        },
      },
      return: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: colors.backButtonBorder,
      },
      wrong: {
        bg: colors.wrong,
        border: '1px solid',
        borderColor: colors.backButtonBorder,
        _hover: {
          bg: 'red.500',
        },
      },
    },
  },
  MainContainer,
};

export const theme = extendTheme({ config, fonts, colors, layerStyle, components });
