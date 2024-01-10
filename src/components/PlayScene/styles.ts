export const TopTextStackStyle = {
  w: '100%',
  justifyContent: 'space-between',
  px: '5px',
  '>p': {
    fontSize: { base: '18px', sm: '18px', md: '20px', lg: '22px' },
  },
};

export const QuestionTextStyle = {
  color: 'white',
  fontSize: { base: '18px', sm: '20px', md: '22px', lg: '24px' },
};

export const AnswerFlexStyle = {
  gap: { base: '18px', lg: '20px' },

  justifyContent: 'center',
};

export const BottomButtomStackStyle = {
  mt: '1.5rem',
  justifyContent: 'center',
  position: 'relative',
  w: '100%',
};

export const PreviousQuestionButtonStyle = {
  position: 'absolute',
  left: {
    base: 'calc(50% - 8rem)',
    sm: 'calc(50% - 9rem)',
    md: 'calc(50% - 10rem)',
    lg: 'calc(50% - 11rem)',
  },
  bg: 'none',
};

export const quizRadioContainerStyle = {
  w: '100%',
  maxWidth: { base: '360px', sm: '380px', md: '260px', lg: '360px' },
  borderRadius: '5px',
};
