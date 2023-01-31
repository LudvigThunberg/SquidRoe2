import { PlaylistModel } from '../../models/responseModels';
import { Box } from '../styledComponents/Box';
import { Heading } from '../styledComponents/Heading';

interface PlaylistProps {
  playlist: PlaylistModel;
}

export const Playlist = ({ playlist }: PlaylistProps) => {
  const { title, creator, playlistIframe } = playlist;
  return (
    <Box
      variant="contentContainer"
      css={{
        '@bp2': {
          maxWidth: '379px',
        },
      }}
    >
      <Box css={{ paddingBottom: '10px' }}>
        <Heading as="h4">{title}</Heading>
        <Heading as="h5">by {creator}</Heading>
      </Box>
      <Box
        css={{
          gridColumn: '1 3',
          maxWidth: '399px',
          minWidth: '250px',
        }}
        dangerouslySetInnerHTML={{ __html: playlistIframe }}
      />
    </Box>
  );
};
