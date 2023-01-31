import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { storage } from '../../database/firebaseConfig';
import { Modal } from './Modal';
import { StyledForm } from '../styledComponents/StyledForm';
import { FormField } from './FormField';
import { Button } from '../styledComponents/Button';
import { uploadRelease } from '../../services/requestService';
import { addNewReleaseData } from '../../formData/AddNewReleaseData';
import { Box } from '../styledComponents/Box';

export const AddNewRelease = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm({
    mode: 'onBlur',
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const {
      artist,
      title,
      soundcloudLink,
      applemusicLink,
      bandcampLink,
      beatportLink,
      deezerLink,
      releaseDate,
      bandcampEmbed,
      spotifyLink,
      traxsourceLink,
      remixedBy,
    } = data;

    // upload Image to firbase storage
    const coverArtFile = data.coverArt[0];
    const storageRef = ref(storage, `/coverArt/${data.coverArt[0].name}`);
    const coverArtSnapshot = await uploadBytesResumable(
      storageRef,
      coverArtFile,
    );
    const coverArt = await getDownloadURL(coverArtSnapshot.ref);

    // upload release
    const releaseData = {
      artist,
      title,
      soundcloudLink,
      coverArt,
      applemusicLink,
      bandcampLink,
      beatportLink,
      deezerLink,
      releaseDate,
      bandcampEmbed,
      spotifyLink,
      traxsourceLink,
      remixedBy,
    };

    uploadRelease(releaseData)
      .then(() => {
        toast.success('Your release was sucsessfully uploaded');
        handleOpen();
      })
      .catch(() => {
        toast.error('something went wrong please try again');
      });
    methods.reset();
  };

  const formFileds = addNewReleaseData.map((field) => (
    <FormField
      key={field.id}
      labelText={field.labelText}
      inputType={field.inputType}
      required={field.required}
      id={field.id}
      message={field.message}
      minLength={field.minLength}
      pattern={field.pattern}
      accept={field.accept}
    />
  ));

  return (
    <Modal open={open} handleOpen={handleOpen} triggerText="Add New Release">
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
