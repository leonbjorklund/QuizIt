import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { radioTheme, SceneCardStyle, SceneContainerStyle } from './shared-components';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fonts = {
  body: 'Poppins, sans-serif',
};

const colors = {
  secondary: 'blue.900',
  altColor: 'blue.700',
  correctAnswer: 'green.600',
  wrongAnswer: 'red.600',
  proceedButton: 'yellow.300',
  proceedButtonHover: 'yellow.200',
  backButtonBorder: '#FFFFFF26', // white with 40% opacity
};

const components = {
  Text: {
    baseStyle: {
      fontFamily: 'Dosis, sans-serif',
      fontSize: { base: '14px', sm: '16px', md: '18px', lg: '20px' },
    },
    variants: {
      invalidInput: {
        color: colors.wrongAnswer,
        position: 'absolute',
        bottom: 0,
        fontWeight: '900',
      },
      optionTitle: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: {
          base: '16px',
          sm: '18px',
          md: '20px',
          lg: '22px',
        },
      },
      loading: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '800',
        fontSize: {
          base: '3xl',
          sm: '4xl',
          md: '5xl',
          lg: '6xl',
        },
      },
      loadSubtitle: {
        fontSize: {
          base: '18px',
          sm: '20px',
          md: '22px',
          lg: '24px',
        },
        opacity: '.5',
        textAlign: 'center',
      },
      funFactTitle: {
        fontWeight: '600',
        fontSize: {
          base: '18px',
          sm: '20px',
          md: '22px',
          lg: '24px',
        },
      },
      funFact: {
        minHeight: '72px',
        fontWeight: '500',
        fontSize: {
          base: '18px',
          sm: '20px',
          md: '22px',
          lg: '24px',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'medium',
    },
  },
  Input: {
    baseStyle: {
      field: {
        transition: 'none',
        py: { base: '18px', sm: '18px', md: '20px', lg: '22px' },
        fontSize: { base: '13px', sm: '14px', md: '15px', lg: '16px' },
        boxShadow: 'md',
        _dark: {
          bg: '#2D3748',
          outline: 'none',
          borderColor: 'transparent',
          _placeholder: {
            color: '#FFFFFF96',
          },
          _focus: {
            borderColor: '#63b3ed',
            boxShadow: 'inherit',
          },
        },
        _light: {
          bg: 'gray.200',
          _focus: {
            boxShadow: 'inherit',
          },
        },
      },
    },
  },
  Textarea: {
    baseStyle: {
      resize: 'none',
      height: '15rem',
      pr: '4rem',
      fontSize: {
        base: 'sm',
        sm: 'md',
      },
      _dark: {
        border: 'none',
        boxShadow: 'sm',
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
      height: 'auto',
      w: 'auto',
      boxShadow: 'sm',
      padding: { base: '16px 20px', sm: '18px 26px', md: '20px 28px', lg: '20px 30px' },
    },
    variants: {
      HeaderLogo: {
        fontSize: { base: '38px', sm: '44px', md: '48px' },
        fontWeight: 'bold',
        cursor: 'pointer',
        bg: 'transparent',
        p: '0',
        boxShadow: 'none',
      },
      proceed: {
        color: '#000',
        bg: colors.proceedButton,
        fontSize: {
          base: '14px',
          sm: '16px',
          md: '17px',
          lg: '17px',
        },
        _hover: {
          bg: 'yellow.200',
        },
        _disabled: {
          _hover: {
            bg: 'yellow.300!important',
          },
        },
      },
      return: {
        fontSize: {
          base: '14px',
          sm: '16px',
          md: '17px',
          lg: '17px',
        },
        border: '.5px solid',
        bg: 'transparent',
        _hover: {
          bg: colors.backButtonBorder,
        },
        _light: {
          _hover: {
            bg: 'gray.100',
          },
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
  IconButton: {
    variants: {
      previousQuestion: {
        position: 'absolute',
        left: {
          base: 'calc(50% - 8rem)',
          sm: 'calc(50% - 9rem)',
          md: 'calc(50% - 10rem)',
          lg: 'calc(50% - 11rem)',
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
  Radio: radioTheme,
  SceneContainer: SceneContainerStyle,
  SceneCard: SceneCardStyle,
};

export const theme = extendTheme({ config, fonts, colors, components });
