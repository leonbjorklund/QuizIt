import { CloseIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';

import { useAppContext } from '../../AppContext';
import { homeStrings } from '../../assets';
import { QuizInputType, Scene } from '../../utils/types';
import {
  FormErrorMessageStyle,
  InputRightElementStyle,
  QuizTopicFormControlStyle,
  SubmitQuizTopicButtonStyle,
} from './styles';

const { textPlaceholder, continueBtn } = homeStrings;

export const QuizInputForm = () => {
  const { setQuizInput, setScene } = useAppContext();
  const inputRef = useRef(null);

  const validationSchema = Yup.object({
    quizInput: Yup.string()
      .required('Input is required')
      .min(2, 'Input must be at least 2 characters long')
      .max(100, 'Input must be at most 100 characters long'),
  });

  const formik = useFormik({
    initialValues: {
      quizInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const quizInputData: QuizInputType = {
        topic: values.quizInput,
      };
      setQuizInput(quizInputData);
      setScene(Scene.OPTIONS);
      actions.resetForm();
    },
  });

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.placeholder = '';
    formik.setFieldTouched('quizInput', false);
  };

  return (
    <form
      style={{ width: '100%', maxWidth: '600px' }}
      name="quizInput"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <FormControl sx={QuizTopicFormControlStyle} isInvalid={formik.errors.quizInput && formik.touched.quizInput}>
        <InputGroup>
          <Input
            paddingRight={formik.values.quizInput ? '2.5rem' : '1rem'}
            name="quizInput"
            ref={inputRef}
            placeholder={textPlaceholder}
            value={formik.values.quizInput}
            onChange={formik.handleChange}
            onFocus={handleInputFocus}
            onBlur={(e) => (e.target.placeholder = textPlaceholder)}
          />
          <InputRightElement sx={InputRightElementStyle}>
            {formik.values.quizInput && (
              <IconButton
                aria-label="clear-input"
                variant="ghost"
                icon={<CloseIcon boxSize=".9rem" />}
                onClick={() => {
                  formik.setFieldValue('quizInput', '');
                  inputRef.current?.focus();
                }}
                _hover={{ bg: 'transparent' }}
              />
            )}
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage sx={FormErrorMessageStyle}>{formik.errors.quizInput}</FormErrorMessage>
        <Button type="submit" variant="proceed" sx={SubmitQuizTopicButtonStyle}>
          {continueBtn}
        </Button>
      </FormControl>
    </form>
  );
};
