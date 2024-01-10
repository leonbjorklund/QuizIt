import { Icon, IconButton, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

export const CopySiteButton = ({ currentUrl }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const tooltipLabel = isCopied ? 'Copied!' : 'Copy Site Link';

  const copyUrl = () => {
    const el = document.createElement('input');
    el.value = currentUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsCopied(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCopied(false);
  };

  return (
    <Tooltip hasArrow offset={[0, 10]} label={tooltipLabel} closeOnClick={false} isOpen={isHovered || isCopied}>
      <IconButton
        name="copy-link"
        icon={<Icon as={FaRegCopy} boxSize="1.6rem" color="white" />}
        aria-label="copy-link"
        isRound
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={copyUrl}
        bg="blue.900"
        padding=".8rem"
        h="auto"
        w="auto"
        _hover={{ bg: 'blue.700' }}
      />
    </Tooltip>
  );
};
