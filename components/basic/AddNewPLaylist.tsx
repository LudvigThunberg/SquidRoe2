import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Modal } from './Modal';
import { StyledForm } from '../styledComponents/StyledForm';
import { FormField } from './FormField';
import { Button } from '../styledComponents/Button';
import { Box } from '../styledComponents/Box';
import { addNewPLaylistData } from '../../formData/addNewPlaylistData';
import { uploadPlaylist } from '../../services/requestService';

export const AddNewPlaylist = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm({
    mode: 'onBlur',
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (playlistData) => {
    uploadPlaylist(playlistData)
      .then(() => {
        toast.success('Your playlist was sucsessfully uploaded');
        handleOpen();
      })
      .catch(() => {
        toast.error('something went wrong please try again');
      });
    methods.reset();
  };

  const formFileds = addNewPLaylistData.map((field) => (
    <FormField
      key={field.id}
      labelText={field.labelText}
      inputType={field.inputType}
      required={field.required}
      id={field.id}
      message={field.message}
      minLength={field.minLength}
    />
  ));

  return (
    <Modal open={open} handleOpen={handleOpen} triggerText="Add New Playlist">
      <FormProvider {...methods}>
        <StyledForm
          onSubmit={methods.handleSubmit(onSubmit)}
          css={{
            background: '$solidGray',
            width: '290px',
            padding: '20px 150px',
            alignItems: 'center',
            borderRadius: '20px',
          }}
        >
          {formFileds}
          <Box
            css={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '30px',
            }}
          >
            <Button variant="abort" onClick={handleOpen}>
              Close
            </Button>
            <Button type="submit">Submit</Button>
          </Box>
        </StyledForm>
      </FormProvider>
    </Modal>
  );
};
