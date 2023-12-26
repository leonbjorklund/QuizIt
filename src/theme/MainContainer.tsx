import { Box, useStyleConfig } from '@chakra-ui/react';

export const MainContainer = (props: any) => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('MainContainer', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
};
