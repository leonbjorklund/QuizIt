import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#0A192F',
  secondary: '#132F59',
  correct: '#147849',
  wrong: '#A92B2B',
  button: '#FAF089',
  selected: '#325386',
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

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'regular',
    },
    variant: {
      proceed: {
        bg: colors.button,
        borderRadius: '5px',
        color: '#000',
      },
      return: {
        bg: 'transparent',
        color: '#FFF',
        borderColor: '#FFF',
        borderRadius: '5px',
      },
    },
  },
  SceneContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '800px',
    paddingX: {
      base: '20px',
      sm: '40px',
      md: '80px'
    }
  },
  PlayCard: {
    display: 'flex',
    
  }
};

export const theme = extendTheme({ colors, layerStyle, components });
