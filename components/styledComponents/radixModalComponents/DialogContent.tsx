import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled } from '../../../stitches.config';

export const DialogContent = styled(AlertDialog.Content, {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',
});
