import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { StyledForm } from '../styledComponents/StyledForm';
import { Button } from '../styledComponents/Button';
import { FormField } from './FormField';
import { Box } from '../styledComponents/Box';
import { Paragraph } from '../styledComponents/Paragraph';
import { CheckboxFormField } from './CheckboxFormField';
import { subscribeToMailingList } from '../../services/requestService';
import 'react-toastify/dist/ReactToastify.css';

const NEXT_BASE_URL = process.env.NEXT_PUBLIC_NEXT_BASE_URL as string;

export const EmailForm = () => {
  const methods = useForm({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    subscribeToMailingList(NEXT_BASE_URL, data)
      .then(() => {
        toast.success('Thank you!');
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.warning('Email address is already submitted');
        } else {
          toast.error('Email address is already submitted');
        }
      });

    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField
          labelText="Name"
          inputType="text"
          id="name"
          minLength={2}
          maxLength={30}
          required
          message="Name must be between 2 and 30 characters"
        />
        <FormField
          labelText="Email"
          inputType="text"
          id="email"
          minLength={6}
          pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
          required
          message="Please enter a valid email address"
        />
        <Box
          css={{
            display: 'flex',
            gap: '10px',
            width: '100%',
            maxWidth: '400px',
            alignItems: 'flex-start',
          }}
        >
          <CheckboxFormField
            inputType="checkbox"
            id="gdpr"
            required
            message="Please check the box"
          />
          <Paragraph
            css={{
              background: 'transparent',
              color: '$whiteGray',
              fontSize: '0.7rem',
            }}
          >
            I’ll allow Squid Roe Records to use the email address I provide on
            this form to be in touch with me and to provide updates and
            marketing.{' '}
          </Paragraph>
          <Button
            type="submit"
            css={{
              background: '$whiteGray',
              color: '$black',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                background: '$gray',
                color: '$whiteGray',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </StyledForm>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </FormProvider>
  );
};
