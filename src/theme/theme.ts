import { defineStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { radioTheme } from '../components/PlayScene/Radio';

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
  backButtonBorder: '#FFFFFF66', // white with 40% opacity
};

const fonts = {
  body: 'Poppins, sans-serif',
};

const SceneContainer = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  variants: {
    playScene: {
      maxWidth: { sm: '500px', md: '600px', lg: '100%' },
      borderRadius: '5px',
      bg: colors.secondary,
      padding: { base: '16px', sm: '20px', md: '20px', lg: '30px' },
      gap: { base: '24px', sm: '28px', md: '32px', lg: '40px' },
    },
    playSceneTrueFalse: {},
  },
});

const layerStyle = {
  base: {
    bg: colors.selected,
    border: '2px solid',
    borderColor: colors.selected,
    color: '#FFF',
    boxShadow: '4px 4px #00000040',
    borderRadius: '5px',
  },
  selected: {
    bg: colors.selected,
    border: '2px solid',
    borderColor: '#FFF',
    color: '#FFF',
    boxShadow: '4px 4px #00000040',
    borderRadius: '5px',
  },
  correctAnswer: {
    bg: colors.correct,
    border: '2px solid',
    borderColor: colors.correct,
    color: '#FFF',
    boxShadow: '4px 4px #00000040',
    borderRadius: '5px',
  },
  correctAnswerSelected: {
    bg: colors.correct,
    border: '2px solid',
    borderColor: '#FFF',
    color: '#FFF',
    boxShadow: '4px 4px #00000040',
    borderRadius: '5px',
  },
  wrongAnswerSelected: {
    bg: colors.wrong,
    border: '2px solid',
    borderColor: '#FFF',
    color: '#FFF',
    boxShadow: '4px 4px #00000040',
    borderRadius: '5px',
  },
};

const components = {
  Radio: radioTheme,
  Heading: {
    baseStyle: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'medium',
      fontSize: { base: '20px', sm: '22px', md: '24px', lg: '26px' },
    },
  },
  Input: {
    baseStyle: {
      field: {
        mt: '.25rem',
        border: 'none',
        py: '1.4rem',
        pr: '4rem',
        fontSize: {
          base: 'sm',
          sm: 'md',
        },
        _dark: {
          bg: '#2D3748',
          _placeholder: {
            color: '#FFFFFF99',
          },
        },
        _light: {
          bg: '#E2E8EF',
          _placeholder: {
            color: '#4A556899',
          },
        },
      },
      element: {
        mt: '.45rem',
        mr: '.2rem',
      },
    },
  },
  Textarea: {
    baseStyle: {
      resize: 'none',
      height: '15rem',
      mt: '.25rem',
      pr: '4rem',
      fontSize: {
        base: 'sm',
        sm: 'md',
      },
      _dark: {
        bg: '#2D3748',
        _placeholder: {
          color: '#FFFFFF99',
        },
      },
      _light: {
        bg: '#E2E8EF',
        _placeholder: {
          color: '#4A556899',
        },
      },
    },
  },
  Text: {
    baseStyle: {
      fontFamily: 'Dosis, sans-serif',
      fontSize: { base: 'sm', md: 'md', lg: 'lg' },
    },
  },
  Control: {
    baseStyle: {
      bg: 'red.500',
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
        color: 'black',
        fontSize: { base: 'xs', sm: 'sm', md: 'md' },
        bg: colors.proceedButton,
        height: 'auto',
        _hover: {
          bg: 'yellow.100',
          color: 'black',
        },
        _disabled: {
          _hover: {
            bg: 'yellow.200!important',
          },
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
      searchbarBtn: {
        _dark: {
          bg: '#4A556899',
          color: '#FFFFFF99',
        },
        _light: {
          bg: '#FFFFFF99',
          color: '#4A556899',
        },
      },
    },
  },
  SceneContainer: SceneContainer,
};

export const theme = extendTheme({ config, fonts, colors, components });
