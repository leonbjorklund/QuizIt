import { radioAnatomy } from '@chakra-ui/anatomy';
import { Radio as ChakraRadio, RadioProps as ChakraRadioProps, createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { useMemo } from 'react';
import { PlayQuizRadioContainer, getBackgroundColor } from '../components/PlayScene/PlayQuizRadioContainer';

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
  optionAlt: definePartsStyle({
    container: {
      bg: 'transparent',
      color: '#FFF'
    },
    control: {},
    label: {
      fontSize: {
        base: '18px',
        sm: '20px',
        md: '22px',
        lg: '24px',
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
  const bgColor = useMemo(() => {
    return getBackgroundColor({ isCorrectOption, showAnswer, isChecked, isUserPreviousChoice });
  }, [isCorrectOption, showAnswer, isChecked, isUserPreviousChoice]);

  if (isPlayQuizScene) {
    return (
      <PlayQuizRadioContainer bgColor={bgColor}>
        <ChakraRadio {...props} />
      </PlayQuizRadioContainer>
    );
  } else {
    return <ChakraRadio {...props} />;
  }
};
