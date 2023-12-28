import { radioAnatomy } from '@chakra-ui/anatomy';
import { Box, createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    boxShadow: 'md',
    borderRadius: '5px',
    width: '100%',
    bg: 'transparent',
    display: 'flex',
    padding: {
      base: '8px',
      sm: '10px',
      md: '12px',
    },
    _checked: {
      outline: '1px solid white',
    },
  },
  control: {
    display: 'none',
  },
  label: {
    fontFamily: 'Dosis, sans-serif',
    fontWeight: 'medium',
    fontSize: {
      base: '18px',
      sm: '20px',
      md: '22px',
      lg: '24px',
    },
    h: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
    margin: '0',
    _disabled: {
      opacity: 1,
    },
  },
});

const sizes = {
  // define custom styles for xl size
  xl: definePartsStyle({
    label: {
      fontSize: {
        base: '16px',
        sm: '18px',
        md: '20px',
        lg: '22px',
      },
    },
    container: {
      maxWidth: '400px',
    },
  }),
};

// export the component theme
export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  // variants,
});

import { Radio as ChakraRadio, RadioProps as ChakraRadioProps } from '@chakra-ui/react';

interface RadioProps extends ChakraRadioProps {
  isCorrectOption: boolean;
  showAnswer: boolean;
  isChecked: boolean; // Add this
  isUserPreviousChoice: boolean; // Add this
}

export const Radio: React.FC<RadioProps> = ({
  showAnswer,
  isCorrectOption,
  isChecked,
  isUserPreviousChoice,
  ...props
}) => {
  let bgColor = '#325386';
  if (isCorrectOption) {
    bgColor = 'green.600';
  } else if (showAnswer && !isCorrectOption && (isChecked || isUserPreviousChoice)) {
    bgColor = 'red.600';
  }

  return (
    // <Box w={{ base: '100%', lg: '48%' }} maxWidth={{ sm: '500px', md: '500px' }} borderRadius="5px" bg={bgColor}>
    <Box w="100%" maxWidth={{ sm: '200px', md: '200px', lg: '200px' }} borderRadius="5px" bg={bgColor}>
      <ChakraRadio {...props} />
    </Box>
  );
};
