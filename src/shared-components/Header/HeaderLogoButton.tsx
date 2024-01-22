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

import { useAppContext } from '../../AppContext';
import { SceneEnum } from '../../utils';
import { ModalBodyStyle, ModalGoHomeButtonStyle, ModalHeaderStyle } from './styles';

const ConfirmationModal = ({ isOpen, onClose, setScene }) => {
  const { colorMode } = useColorMode();

  const modalContentBg = colorMode === 'dark' ? 'blue.700' : 'gray.500';

  return (
    <Modal size="sm" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={{ base: '340px', sm: '100%' }} bg={modalContentBg}>
        <ModalBody sx={ModalBodyStyle}>
          <VStack>
            <Heading sx={ModalHeaderStyle}>
              Sure you want to go Home? <br /> You&apos;ll lose your current Quiz!
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
                setScene(SceneEnum.HOME);
              }}
            >
              Go Home
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const HeaderLogoButton = () => {
  const { scene, setScene } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    if (scene === SceneEnum.PLAY) {
      onOpen();
    } else {
      setScene(SceneEnum.HOME);
    }
  };

  return (
    <>
      <Button variant="HeaderLogo" p={0} onClick={handleClick}>
        QuizIt
      </Button>
      {scene === SceneEnum.PLAY && <ConfirmationModal isOpen={isOpen} onClose={onClose} setScene={setScene} />}
    </>
  );
};
