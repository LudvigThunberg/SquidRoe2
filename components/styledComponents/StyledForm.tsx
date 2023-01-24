import { styled } from '../../stitches.config';

export const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  background: 'transparent',
  width: '100%',
  maxWidth: '270px',
  transition: 'all 0.5s ease-in-out',
  '@bp2': {},
  variants: {
    isOpen: {
      true: { opacity: '0' },
    },
  },
});
