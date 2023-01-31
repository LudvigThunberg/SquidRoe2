import Error from 'next/error';
import { Albums } from '../components/basic/Albums';
import { SocialsLinks } from '../components/basic/SocialsLinks';
import { Heading } from '../components/styledComponents/Heading';
import {
  ContactLinkObject,
  IconModelResponse,
  ReleaseModel,
} from '../models/responseModels';
import {
  /* getAllReleases, */ getIcons,
  getSoc,
} from '../services/requestService';
import { MotionContainer } from '../components/styledComponents/MotionContainer';
import { fadeInAndUp } from '../motionAnimations/motionAnimations';
import { db } from '../database/DB';

interface HomeProps {
  links: ContactLinkObject[];
  releases: ReleaseModel[];
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
  const res = Promise.all([
    getSoc(
      process.env.NEXT_PUBLIC_BASE_URL as string,
      process.env.NEXT_PUBLIC_API_KEY as string,
    ),
    /* getReleases(
      process.env.NEXT_PUBLIC_BASE_URL as string,
      process.env.NEXT_PUBLIC_API_KEY as string,
    ), */
    db.getAllReleases(),
    getIcons(
      process.env.NEXT_PUBLIC_BASE_URL as string,
      process.env.NEXT_PUBLIC_API_KEY as string,
    ),
  ]);

  const [linksUnsorted, releasesUnsorted, icons /* allReleases */] = await res;

  const releases = releasesUnsorted.sort(
    (a, b) => parseInt(b.releaseDate, 10) - parseInt(a.releaseDate, 10),
  );

  const links = linksUnsorted.data.filter(
    (link) => link.attributes.contactLink,
  );

  return { props: { errorCode: NaN, links, releases, icons } };
}
