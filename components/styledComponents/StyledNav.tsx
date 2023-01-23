import { styled } from '../../stitches.config';

export const StyledNav = styled('nav', {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: '0',
  right: '0',
  background: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'right 0.2s ease-in-out',
  '@bp2': {
    position: 'unset',
    height: 'unset',
  },
  variants: {
    isOpen: {
      true: {
        right: '0',
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 3,
      },
      false: {
        right: '-100vw',
      },
    },
  },
});
