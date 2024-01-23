export const HeaderContainerStyle = {
  height: { base: '74px', sm: '78px', md: '84px', lg: '90px' },
  position: 'absolute',
  zIndex: 1,
  alignItems: 'center',
  width: '100%',
  padding: {
    base: '10px 10px',
    sm: '10px 30px',
    md: '10px 40px',
  },
  maxWidth: '1440px',
  left: '50%',
  transform: 'translateX(-50%)',
};

export const ModalGoHomeButtonStyle = {
  color: 'white',
  bg: 'gray.700',
  _hover: { bg: 'gray.600' },
};

export const ModalBodyStyle = {
  paddingY: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const ModalHeaderStyle = {
  lineHeight: '1.8',
  color: 'white',
  fontSize: 'xl',
};
