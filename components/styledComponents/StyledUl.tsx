import { styled } from '../../stitches.config';

export const StyledUl = styled('ul', {
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '60px',
  padding: '0',
  '@bp2': {
    flexDirection: 'row',
    gap: '15px',
    marginLeft: 'auto',
  },
});
