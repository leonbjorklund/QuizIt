import { defineStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { radioTheme } from '../scenes/PlayScene/Radio';

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
      borderRadius: '5px',
      maxWidth: { sm: '460px', md: '600px', lg: '100%' },
    },
    playSceneTrueFalse: {},
    optionsScene: {
      gap: { base: '14px', sm: '16px', md: '18px', lg: '20px' },
      maxWidth: { sm: '460px', md: '600px', lg: '100%' },
    },
    funFact: {
      position: 'absolute',
      bottom: 100,
      textAlign: 'center',
      px: '1rem',
    },
    endScene: {
      gap: '2rem',
    },
  },
});

const SceneCard = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  variants: {
    playCard: {
      bg: colors.secondary,
      maxWidth: { sm: '500px', md: '600px', lg: '100%' },
      borderRadius: '5px',
      padding: { base: '16px', sm: '20px', md: '20px', lg: '30px' },
      paddingTop: '15px!important',
      gap: { base: '20px', sm: '20px' },
      _light: {
        bg: 'gray.400',
      },
    },
    optionsCard: {
      boxShadow: 'md',
      maxWidth: '500px',
      borderRadius: '5px',
      padding: '10px',
      gap: '10px',
      _dark: {
        bg: colors.secondary,
        color: 'white',
      },
      _light: {
        color: 'black',
        bg: 'gray.400',
      },
    },
    playSceneTrueFalse: {},
    option: {
      boxShadow: 'md',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      padding: { base: '5px', sm: '10px 20px' },
      borderRadius: '5px',
      _dark: {
        bg: 'blue.700',
      },
      _light: {
        bg: 'gray.500',
      },
    },
  },
});

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
          base: '18px',
          sm: '20px',
          md: '22px',
          lg: '24px',
        },
      },
      optionText: {
        color: '#FFF',
        fontSize: {
          base: '18px',
          sm: '20px',
          md: '22px',
          lg: '24px',
        },
      },
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
        opacity: '.5',
        textAlign: 'center',
      },
      funFactTitle: {
        fontWeight: '600',
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
        },
      },
      funFact: {
        minHeight: '72px',
        fontWeight: '500',
        fontSize: {
          base: 'md',
          sm: 'lg',
          md: 'xl',
          lg: '2xl',
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
        py: { base: '20px', sm: '20px', md: '22px', lg: '24px' },
        fontSize: { base: '13px', sm: '14px', md: '16px', lg: '17px' },
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
      padding: { base: '18px 24px', sm: '18px 26px', md: '20px 28px', lg: '22px 30px' },
    },
    variants: {
      HeaderLogo: {
        fontSize: { base: '38px', sm: '44px', md: '52px' },
        fontWeight: 'bold',
        cursor: 'pointer',
        bg: 'transparent',
        p: '0',
      },
      proceed: {
        color: '#000',
        bg: colors.proceedButton,
        fontSize: {
          base: '15px',
          sm: '16px',
          md: '18px',
          lg: '18px',
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
          md: '18px',
          lg: '18px',
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
    baseStyle: {},
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
  SceneContainer: SceneContainer,
  SceneCard: SceneCard,
};

export const theme = extendTheme({ config, fonts, colors, components });
