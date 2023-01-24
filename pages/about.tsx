import Error from 'next/error';
import { ToastContainer } from 'react-toastify';
import { SocialsLinks } from '../components/basic/SocialsLinks';
import { Heading } from '../components/styledComponents/Heading';
import { AboutModel, ContactLinkObject } from '../models/responseModels';
import { getAboutContent, getSoc } from '../services/requestService';
import { AboutSection } from '../components/basic/AboutSection';
import { Box } from '../components/styledComponents/Box';
import { MotionContainer } from '../components/styledComponents/MotionContainer';
import { fadeInAndUp } from '../motionAnimations/motionAnimations';

interface AboutProps {
  links: ContactLinkObject[];
  about: AboutModel[];
  errorCode: number;
}

export default function About({ links, errorCode, about }: AboutProps) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const abouts = about.map((aboutSection) => (
    <Box key={aboutSection.id}>
      <AboutSection aboutSection={aboutSection} />
    </Box>
  ));

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
        ABOUT
      </Heading>
      <Box
        variant="contentContainer"
        css={{
          display: 'grid',
          gridGap: '10px',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
          gridAutoFlow: 'column',
          margin: '30px 0px 80px 00px',
          '@bp2': {
            maxWidth: '600px',
            gridTemplateRows: '1fr 1fr 1fr',
            gridTemplateColumns: 'auto',
          },
          '@bp3': {
            maxWidth: '1000px',
            gridTemplateRows: '1fr 1fr',
            gridTemplateColumns: 'auto',
          },
        }}
      >
        {abouts}
      </Box>
      <SocialsLinks onContact={false} data={links} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </MotionContainer>
  );
}

export async function getServerSideProps() {
  try {
    const res = Promise.all([
      getSoc(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string,
      ),

      getAboutContent(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string,
      ),
    ]);

    const [linksUnsorted, aboutUnsorted] = await res;

    const about = aboutUnsorted.data.sort(
      (a, b) => a.attributes.order - b.attributes.order,
    );

    const links = linksUnsorted.data.filter(
      (link) => link.attributes.contactLink,
    );

    return { props: { errorCode: NaN, links, about } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
