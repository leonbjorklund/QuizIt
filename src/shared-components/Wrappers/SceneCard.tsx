import { Box, useStyleConfig } from '@chakra-ui/react';

export const SceneCard = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('SceneCard', { variant });

  return <Box __css={styles} {...rest} />;
};
