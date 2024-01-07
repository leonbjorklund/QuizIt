import {
  Button,
  FormControl,
  FormErrorMessage,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { FaImage } from 'react-icons/fa';
import * as Yup from 'yup';

import { CloseIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import { homeStrings } from '../../../assets';
import { useAppContext } from '../../../context/AppContext';
import { checkAndValidateURL } from '../../../utils/checkAndValidateURL';
import { Scene } from '../../../utils/types';

export const QuizInputForm = () => {
  const { setQuizInput, setScene } = useAppContext();
  const { textPlaceholder, continueBtn } = homeStrings;
  const inputRef = useRef(null);

  const validationSchema = Yup.object({
    quizInput: Yup.string().required('Input is required').min(2, 'Input must be at least 2 characters long'),
  });

  const formik = useFormik({
    initialValues: {
      quizInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const { isURL, processedInput } = checkAndValidateURL(values.quizInput);
      setQuizInput({ value: processedInput, isURL });
      setScene(Scene.OPTIONS);
      actions.resetForm();
    },
  });

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldTouched('quizInput', false);
    event.target.placeholder = '';
  };

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
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
            pr={formik.values.quizInput ? '5rem' : '3rem'}
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
            <Tooltip hasArrow label="Upload Image" offset={[0, 10]}>
              <IconButton
                h="100%"
                aria-label="Image mode"
                icon={<Icon as={FaImage} boxSize="1.25rem" />}
                onClick={() => console.log('hej')}
              />
            </Tooltip>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{formik.errors.quizInput}</FormErrorMessage>
        <Button type="submit" variant="proceed" mt="1rem">
          {continueBtn}
        </Button>
      </FormControl>
    </form>
  );
};
