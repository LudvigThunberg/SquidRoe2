import { useRecoilState } from 'recoil';
import { styled } from '../../stitches.config';
import { Box } from '../styledComponents/Box';
import { navIsOpen } from '../../atoms/navIsOpen';
import { InvisibleButton } from '../styledComponents/InvisibleButton';

const HamburgerPart = styled('div', {
  width: '30px',
  height: '4px',
  background: '$whiteGray',
  borderRadius: '5px',
  boxShadow: '2px 2px 15px rgba(0, 0, 0, 0.7)',
  transition: 'transform 0.5s cubic-bezier(.61,.91,.59,2)',
  variants: {
    isOpen: {
      true: {
        transform: 'translateX(-5px)',
      },
    },
    isMiddlePart: {
      true: {
        transform: 'translateX(5px)',
      },
    },
  },
});

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useRecoilState(navIsOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <InvisibleButton hamburger="menu" onClick={handleClick}>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          background: 'transparent',
        }}
      >
        <HamburgerPart isOpen={isOpen} />
        <HamburgerPart isMiddlePart={isOpen} />
        <HamburgerPart isOpen={isOpen} />
      </Box>
    </InvisibleButton>
  );
};
