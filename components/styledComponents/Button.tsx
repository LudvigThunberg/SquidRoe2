import { styled } from '../../stitches.config';

export const Button = styled('button', {
  background: '$whiteGray',
  color: '$black',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '5px',
  transition: 'all 0.2s ease-in-out',
  minWidth: '90px',
  '&:hover': {
    background: '$gray',
    color: '$whiteGray',
  },
  variants: {
    variant: {
      abort: {
        background: '$gray',
        color: '$whiteGray',
        '&:hover': {
          background: '$whiteGray',
          color: '$black',
        },
      },
    },
  },
});
