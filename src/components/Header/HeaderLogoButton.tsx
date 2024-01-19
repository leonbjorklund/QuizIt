import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';

export const HeaderLogoButton = () => {
  const { scene, setScene } = useAppContext();

  if (scene === Scene.PLAY) {
    return (
      <Popover>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button variant="HeaderLogo" p="0!important">
                QuizIt
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody textAlign="center">
                Sure you want to go home? <br /> You will lose your current Quiz!
              </PopoverBody>
              <ButtonGroup padding="5px" size="sm" justifyContent="center">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={() => setScene(Scene.HOME)}>
                  Go Home
                </Button>
              </ButtonGroup>
            </PopoverContent>
          </>
        )}
      </Popover>
    );
  } else {
    return (
      <Button variant="HeaderLogo" p="0!important" onClick={() => setScene(Scene.HOME)}>
        QuizIt
      </Button>
    );
  }
};
