import Error from 'next/error';
import { getSoc } from '../services/requestService';
import { ContactLinkObject, PlaylistModel } from '../models/responseModels';
import { Heading } from '../components/styledComponents/Heading';
import { SocialsLinks } from '../components/basic/SocialsLinks';
import { AllPlaylists } from '../components/basic/AllPlaylists';
import { MotionContainer } from '../components/styledComponents/MotionContainer';
import { fadeInAndUp } from '../motionAnimations/motionAnimations';
import { db } from '../database/DB';

interface PlaylistsProps {
  errorCode: number;
  links: ContactLinkObject[];
  playlists: PlaylistModel[];
}

export default function Playlists({
  errorCode,
  links,
  playlists,
}: PlaylistsProps) {
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
        PLAYLISTS
      </Heading>
      <AllPlaylists playlists={playlists} />
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
    db.getAllPlaylists(),
    /* getPlaylists(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string,
      ), */
  ]);

  const [linksUnsorted, playlistsUnsorted] = await res;

  const playlists = playlistsUnsorted.sort((a, b) => a.order - b.order);

  const links = linksUnsorted.data.filter(
    (link) => link.attributes.contactLink,
  );

  return { props: { errorCode: NaN, links, playlists } };
}
