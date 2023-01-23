import { styled } from '../../stitches.config';

export const ContentContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'transparent',
  opacity: '1',
  transition: 'opacity 0.1s ease-out',
  overflowY: 'scroll',
  overflowX: 'hidden',
  '@bp2': {
    height: '100vh',
    paddingBottom: '250px',
  },
  variants: {
    isOpen: {
      true: {},
      false: {
        opacity: '1',
      },
    },
    isOnIndex: {
      true: {
        '@bp2': {
          height: '100vh',
          paddingBottom: '250px',
        },
      },
    },
  },
});
