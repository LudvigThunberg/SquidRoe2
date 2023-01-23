import Link from 'next/link';
import { keyframes, styled } from '../../stitches.config';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(359deg)' },
});

const backSpin = keyframes({
  '0%': { transform: 'rotate(359deg)' },
  '100%': { transform: 'rotate(0deg)' },
});

export const StyledLink = styled(Link, {
  borderRadius: '50%',
  cursor: 'pointer',
  background: 'transparent',
  textDecoration: 'none',
  fontSize: '27px',
  color: '$whiteGray',
  position: 'relative',
  zIndex: '2',
  '@bp2': {
    fontSize: '18px',
  },
  variants: {
    type: {
      navLink: {
        '&:after': {
          content: "''",
          position: 'absolute',
          background: '$whiteGray',
          height: '2px',
          width: '0',
          left: '0',
          bottom: '-3px',
          borderRadius: '5px',
          transition: '0.3s',
        },
        '&:hover:after': {
          width: '100%',
        },
      },
      logo: {
        '&:hover': {
          animation: `${spin} 1818ms infinite linear`,
        },
        '&:not(:hover)': {
          animation: `${backSpin} 200ms ease-out`,
        },
      },
    },
  },
});
