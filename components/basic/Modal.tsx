import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { Box } from '../styledComponents/Box';
import { DialogContent } from '../styledComponents/radixModalComponents/DialogContent';
import { DialogOverlay } from '../styledComponents/radixModalComponents/DialogOverlay';
import { DialogTrigger } from '../styledComponents/radixModalComponents/DialogTrigger';

interface ModalProps {
  children: React.ReactNode;
  triggerText: string;
  open: boolean;
  handleOpen(): void;
}

export const Modal = ({
  children,
  triggerText,
  open,
  handleOpen,
}: ModalProps) => (
  <Box>
    <AlertDialog.Root open={open} onOpenChange={handleOpen}>
      <DialogTrigger>{triggerText}</DialogTrigger>
      <AlertDialog.Portal>
        <DialogOverlay />
        <DialogContent>{children}</DialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  </Box>
);
