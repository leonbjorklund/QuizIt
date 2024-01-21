import { Box, useStyleConfig } from '@chakra-ui/react';

export const SceneContainer = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('SceneContainer', { variant });

  return <Box __css={styles} {...rest} />;
};
