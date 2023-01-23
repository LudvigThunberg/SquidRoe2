import Error from 'next/error';
import { Albums } from '../components/basic/Albums';
import { SocialsLinks } from '../components/basic/SocialsLinks';
import { Heading } from '../components/styledComponents/Heading';
import {
  AlbumModel,
  ContactLinkResponse,
  IconModelResponse,
} from '../models/responseModels';
import { getIcons, getReleases, getSoc } from '../services/requestService';
import { MotionContainer } from '../components/styledComponents/MotionContainer';
import { fadeInAndUp } from '../motionAnimations/motionAnimations';

interface HomeProps {
  links: ContactLinkResponse;
  releases: AlbumModel[];
  icons: IconModelResponse;
  errorCode: number;
}

export default function Releases({
  errorCode,
  links,
  releases,
  icons,
}: HomeProps) {
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
        RELEASES
      </Heading>
      <Albums releases={releases} icons={icons} />
      <SocialsLinks onContact={false} data={links} />
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
      getReleases(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string,
      ),
      getIcons(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string,
      ),
    ]);

    const [links, releasesUnsorted, icons] = await res;

    const releases = releasesUnsorted.data.sort(
      (a, b) =>
        parseInt(b.attributes.releaseDate, 10) -
        parseInt(a.attributes.releaseDate, 10),
    );

    return { props: { errorCode: NaN, links, releases, icons } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
