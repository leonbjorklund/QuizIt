import { Box, defineStyleConfig, useStyleConfig } from '@chakra-ui/react';

export const SceneContainer = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('SceneContainer', { variant });

  return <Box __css={styles} {...rest} />;
};

export const SceneContainerStyle = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  variants: {
    homeScene: {
      maxWidth: { base: '520px', md: '100%' },
    },
    optionsScene: {
      gap: { base: '14px', sm: '16px', md: '18px', lg: '20px' },
      maxWidth: { sm: '460px', md: '600px', lg: '100%' },
    },
    playScene: {
      borderRadius: '5px',
      maxWidth: { sm: '460px', md: '600px', lg: '100%' },
    },
    funFact: {
      position: 'absolute',
      bottom: 100,
      textAlign: 'center',
      px: '2rem',
    },
    endScene: {
      gap: '2rem',
    },
  },
});
