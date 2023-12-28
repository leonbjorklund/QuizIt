import { keyframes } from '@emotion/react';

export const loadingDot = {
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

export const logoAnimation = {
  height: '4rem',
  mr: '.7rem',
  mb: '1rem',
  animation: `${keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
  `} 2s linear infinite`,
};
