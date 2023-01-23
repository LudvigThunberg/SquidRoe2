import { styled } from '../../stitches.config';

export const StyledHeader = styled('header', {
  width: '100vw',
  background:
    'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0) 100%)',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'unset',
  padding: '20px 40px 20px 40px',
  '@bp2': {
    padding: '40px 50px 40px 50px',
  },
  '@bp3': {
    padding: '40px 100px 40px 100px',
  },
});
