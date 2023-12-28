import { keyframes } from '@emotion/react';

export const LoadingDotStyle = {
  animation: `${keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
        opacity: 0;
    }
  `} 1.7s linear infinite`,
};

export const LoadingContainerStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  lineHeight: '1.35',
  marginBottom: '2rem',
};
