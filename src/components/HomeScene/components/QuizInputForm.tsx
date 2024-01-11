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

import { homeStrings } from '../../../assets';
import { useAppContext } from '../../../context/AppContext';
import { checkAndValidateURL } from '../../../utils/checkAndValidateURL';
import { Scene } from '../../../utils/types';

export const QuizInputForm = () => {
  const { setQuizInput, setScene } = useAppContext();
  const { textPlaceholder, continueBtn } = homeStrings;
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
      const { isURL, processedInput } = checkAndValidateURL(values.quizInput);
      setQuizInput({ topic: processedInput, isURL });
      setScene(Scene.OPTIONS);
      actions.resetForm();
    },
  });

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.placeholder = '';
    formik.setFieldTouched('quizInput', false);
    // event.stopPropagation();
  };

  return (
    <form
      name="quizInput"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      style={{ width: '100%', maxWidth: '600px' }}
    >
      <FormControl
        display="flex"
        alignItems="center"
        flexDirection="column"
        isInvalid={formik.errors.quizInput && formik.touched.quizInput}
      >
        <InputGroup>
          <Input
            ref={inputRef}
            name="quizInput"
            // for if we have image input
            // pr={formik.values.quizInput ? '5rem' : '3rem'}
            pr={formik.values.quizInput ? '3rem' : '1rem'}
            onChange={formik.handleChange}
            onFocus={handleInputFocus}
            onBlur={(e) => (e.target.placeholder = textPlaceholder)}
            value={formik.values.quizInput}
            placeholder={textPlaceholder}
          />
          <InputRightElement p="4px" h="100%" w="auto">
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

            {
              // for if we have image input
              /* <Tooltip hasArrow label="Upload Image" offset={[0, 10]}>
              <IconButton
                h="100%"
                aria-label="Image mode"
                icon={<Icon as={FaImage} boxSize="1.25rem" />}
                onClick={() => console.log('hej')}
              />
            </Tooltip> */
            }
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage textAlign="center" fontSize={{ base: '14px', sm: '14px', md: '16px', lg: '16px' }}>
          {formik.errors.quizInput}
        </FormErrorMessage>
        <Button type="submit" variant="proceed" mt="1rem">
          {continueBtn}
        </Button>
      </FormControl>
    </form>
  );
};
