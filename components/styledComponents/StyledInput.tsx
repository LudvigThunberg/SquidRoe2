import { styled } from '../../stitches.config';

export const StyledInput = styled('input', {
  minWidth: '270px',
  maxWidth: '500px',
  padding: '10px',
  color: '$whiteGray',
  border: '1px solid #DEDEDE',
  borderRadius: '5px',
  background: '$gray',
  bp2: {
    maxWidth: '350px',
  },
});
