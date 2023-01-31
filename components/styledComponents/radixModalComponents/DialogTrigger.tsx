import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled } from '../../../stitches.config';

export const DialogTrigger = styled(AlertDialog.Trigger, {
  background: '$whiteGray',
  color: '$black',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '5px',
  transition: 'all 0.2s ease-in-out',
  minWidth: '150px',
  '&:hover': {
    background: '$gray',
    color: '$whiteGray',
  },
});
