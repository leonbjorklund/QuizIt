import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: '5px',
    padding: '12px',
    w: { base: '100%', lg: '48%' },
    bg: '#325386',
    background: (props) => (props.isCorrectOption ? 'green.600' : '#325386'),

    display: 'flex',
    _checked: {
      outline: '1px solid white',
    },
  },
  control: {
    borderColor: 'white',
    size: 'lg',
    color: 'white!important',
    bg: 'transparent!important',
    _checked: {
      border: '2px solid white',
    },
  },
  label: {
    size: '2xl',
    fontFamily: 'Dosis, sans-serif',
    fontWeight: 'medium',
  },
});

const sizes = {
  // define custom styles for xl size
  xl: definePartsStyle({
    control: { w: '5', h: '5' },
    label: { fontSize: '2xl' },
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
  isCorrectOption?: boolean;
}

export const Radio: React.FC<RadioProps> = ({ isCorrectOption, ...props }) => {
  return <ChakraRadio {...props} />;
};
