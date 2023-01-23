import Error from 'next/error';
import { getPlaylists, getSoc } from '../services/requestService';
import { ContactLinkResponse, PlaylistModel } from '../models/responseModels';
import { Heading } from '../components/styledComponents/Heading';
import { SocialsLinks } from '../components/basic/SocialsLinks';
import { AllPlaylists } from '../components/basic/AllPlaylists';
import { MotionContainer } from '../components/styledComponents/MotionContainer';
import { fadeInAndUp } from '../motionAnimations/motionAnimations';

interface PlaylistsProps {
  errorCode: number;
  links: ContactLinkResponse;
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
  try {
    const res = Promise.all([
      getSoc(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string,
      ),
      getPlaylists(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string,
      ),
    ]);

    const [links, playlistsUnsorted] = await res;

    const playlists = playlistsUnsorted.data.sort(
      (a, b) => a.attributes.order - b.attributes.order,
    );

    return { props: { errorCode: NaN, links, playlists } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
