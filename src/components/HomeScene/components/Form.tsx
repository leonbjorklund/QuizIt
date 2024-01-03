import { CloseIcon, EditIcon, LinkIcon } from '@chakra-ui/icons';
import { Button, FormControl, Input, InputGroup, InputRightElement, Text, Textarea, Tooltip } from '@chakra-ui/react';

import { useState } from 'react';
import { homeStrings } from '../../../assets';

enum InputType {
  URL = 'url',
  TEXT = 'text',
}

interface IForm {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isTouched: boolean;
  setIsTouched: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Form = ({ inputValue, setInputValue, isTouched, setIsTouched }: IForm) => {
  const { urlPlaceholder, textPlaceholder } = homeStrings;

  const [inputType, setInputType] = useState<InputType>(InputType.TEXT);

  const isError = isTouched && inputValue === '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsTouched(true);
    setInputValue(e.target.value);
  };

  const handleSwitchInputType = () => {
    if (inputType === InputType.TEXT) {
      setInputType(InputType.URL);
    } else {
      setInputType(InputType.TEXT);
    }
  };

  return (
    <>
      <FormControl display="flex" alignItems="center" flexDirection="column" isInvalid={isError}>
        <InputGroup maxWidth="600px">
          {inputType === InputType.URL ? (
            <Input placeholder={urlPlaceholder} name="searchbar" onChange={handleInputChange} value={inputValue} maxLength={100}/>
          ) : (
            <Textarea placeholder={textPlaceholder} name="searchbar" onChange={handleInputChange} value={inputValue} maxLength={100}/>
          )}

          <InputRightElement>
            {inputValue !== '' ? (
              <Tooltip hasArrow label="Clear text" offset={[0, 10]}>
                <Button variant="ghost" onClick={() => setInputValue('')}>
                  <CloseIcon />
                </Button>
              </Tooltip>
            ) : inputType === InputType.URL ? (
              <Tooltip hasArrow label="Text mode" offset={[0, 10]}>
                <Button variant="searchbarBtn" onClick={handleSwitchInputType}>
                  <EditIcon />
                </Button>
              </Tooltip>
            ) : (
              <Tooltip hasArrow label="URL mode" offset={[0, 10]}>
                <Button variant="searchbarBtn" onClick={handleSwitchInputType}>
                  <LinkIcon />
                </Button>
              </Tooltip>
            )}
          </InputRightElement>
        </InputGroup>
      {isError && <Text variant="invalidInput">Invalid input</Text>}
      </FormControl>
    </>
  );
};
