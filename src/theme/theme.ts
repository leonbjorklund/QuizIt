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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  variants: {
    funFact: {
      position: 'absolute',
      bottom: 120,
      textAlign: 'center',
      px: '1rem',
    },
  },
});

const components = {
  Text: {
    baseStyle: {
      fontFamily: 'Dosis, sans-serif',
      fontSize: { base: 'sm', md: 'md', lg: 'lg' },
    },
    variants: {
      loading: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '800',
        fontSize: {
          base: '4xl',
          sm: '5xl',
          md: '6xl',
          lg: '7xl',
        },
      },
      loadSubtitle: {
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
        },
        opacity: '.4',
        fontWeight: '500',
        textAlign: 'center',
      },
      funFactTitle: {
        fontWeight: '800',
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
        },
      },
      funFact: {
        fontWeight: '500',
        opacity: '.8',
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
        },
      },
    },
  },
  Button: {
    baseStyle: {
      fontWeight: '500',
      borderRadius: '5px',
      border: 'none',
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
        border: '.5px solid',
        bg: 'transparent',
        _hover: {
          bg: colors.backButtonBorder,
        },
      },
      wrong: {
        bg: colors.wrong,
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
