import { keyframes, styled } from '../../stitches.config';

const grow = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.05)' },
  '100%': { transform: 'scale(1)' },
});

export const StyledContactPageLink = styled('a', {
  background: 'transparent',
  transition: 'all .2s ease-in-out',
  width: '80px',
  borderRadius: '50%',
  cursor: 'pointer',
  zIndex: '1',
  '@bp2': {
    width: '120px',
  },
  '@bp3': {
    width: '130px',
  },
  '&:hover': {
    animation: `${grow} 400ms linear`,
  },
});
