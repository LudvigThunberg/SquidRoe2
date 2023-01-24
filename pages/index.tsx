import React from 'react';
import Error from 'next/error';
import { SocialsLinks } from '../components/basic/SocialsLinks';
import { Heading } from '../components/styledComponents/Heading';
import { ContactLinkObject } from '../models/responseModels';
import { getSoc } from '../services/requestService';
import { MotionContainer } from '../components/styledComponents/MotionContainer';
import { fadeInAndUp } from '../motionAnimations/motionAnimations';

interface HomeProps {
  links: ContactLinkObject[];
  errorCode: number;
}

export default function Home({ errorCode, links }: HomeProps) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <MotionContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAndUp}
      css={{
        height: 'calc(100vh - 150px)',
        justifyContent: 'space-around',
        '@bp2': {
          paddingTop: '150px',
        },
      }}
    >
      <Heading
        css={{
          textAlign: 'center',
          fontSize: '50px',
          '@bp1': { fontSize: '80px' },
          '@bp2': { fontSize: '70px' },
          '@bp3': {
            fontSize: '100px',
          },
        }}
      >
        SQUID ROE RECORDS
      </Heading>
      <SocialsLinks data={links} />
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
      (link) => link.attributes.contactLink,
    );

    return { props: { errorCode: NaN, links } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
