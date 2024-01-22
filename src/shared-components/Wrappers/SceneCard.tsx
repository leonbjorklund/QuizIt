import { Box, defineStyleConfig, useStyleConfig } from '@chakra-ui/react';

export const SceneCard = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('SceneCard', { variant });

  return <Box __css={styles} {...rest} />;
};

export const SceneCardStyle = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  variants: {
    playCard: {
      bg: 'blue.900',
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
        bg: 'blue.900',
        color: 'white',
      },
      _light: {
        color: 'black',
        bg: 'gray.400',
      },
    },
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
