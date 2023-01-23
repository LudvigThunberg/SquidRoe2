import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Error from 'next/error';
import { EmailForm } from '../components/basic/EmailForm';
import { SocialsLinks } from '../components/basic/SocialsLinks';
import { Heading } from '../components/styledComponents/Heading';
import { MotionContainer } from '../components/styledComponents/MotionContainer';
import { ContactLinkObject } from '../models/responseModels';
import { getSoc } from '../services/requestService';
import { fadeInAndUp } from '../motionAnimations/motionAnimations';

interface ContactProps {
  links: ContactLinkObject[];
  errorCode: number;
}

export default function Contact({ links, errorCode }: ContactProps) {
  const [onContact, setOnContact] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/contact' && onContact === false) {
      setOnContact(true);
    }
  }, []);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <MotionContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAndUp}
    >
      <Heading
        as="h2"
        css={{
          '@bp2': { fontSize: '30px' },
          '@bp3': {
            fontSize: '70px',
          },
        }}
      >
        CONTACT
      </Heading>

      <SocialsLinks onContact={onContact} data={links} />
      <EmailForm />
    </MotionContainer>
  );
}

export async function getServerSideProps() {
  try {
    const linksUnsorted = await getSoc(
      process.env.NEXT_PUBLIC_BASE_URL as string,
      process.env.NEXT_PUBLIC_API_KEY as string,
    );

    const links = linksUnsorted.data.filter(
      (link) => link.attributes.contactLink || link.attributes.email,
    );
    return { props: { errorCode: NaN, links } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
