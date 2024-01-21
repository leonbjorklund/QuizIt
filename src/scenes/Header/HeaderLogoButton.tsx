import {
  Button,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  VStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { useAppContext } from '../../context/AppContext';
import { Scene } from '../../utils/types';
import { ModalGoHomeButtonStyle } from './styles';

export const HeaderLogoButton = () => {
  const { scene, setScene } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  if (scene === Scene.PLAY) {
    return (
      <>
        <Button onClick={onOpen} variant="HeaderLogo" p="0!important">
          QuizIt
        </Button>

        <Modal size="sm" isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent width={{ base: '340px', sm: '100%' }} bg={colorMode === 'dark' ? 'blue.700' : 'gray.500'}>
            <ModalBody paddingY="20px" display="flex" flexDirection="column" alignItems="center">
              <VStack>
                <Heading color="white" fontSize="xl">
                  Sure you want to go Home?
                </Heading>
                <Heading color="white" fontSize="xl">
                  {' '}
                  You&apos;ll lose your current Quiz!
                </Heading>
              </VStack>
              <HStack mt="1rem" gap="1rem">
                <Button color="white" variant="return" onClick={onClose}>
                  Close
                </Button>
                <Button
                  sx={ModalGoHomeButtonStyle}
                  onClick={() => {
                    onClose();
                    setScene(Scene.HOME);
                  }}
                >
                  Go Home
                </Button>
              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  } else {
    return (
      <Button variant="HeaderLogo" p="0!important" onClick={() => setScene(Scene.HOME)}>
        QuizIt
      </Button>
    );
  }
};
