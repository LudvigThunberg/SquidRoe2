import { IconModelResponse, ReleaseModel } from '../../models/responseModels';
import { Box } from '../styledComponents/Box';
import { Album } from './Album';

interface AlbumsProps {
  releases: ReleaseModel[];
  icons: IconModelResponse;
}

export const Albums = ({ releases, icons }: AlbumsProps) => {
  const albumReleases = releases.map((album) => (
    <Album key={album.id} album={album} icons={icons} />
  ));
  return (
    <Box css={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box
        css={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '30px 0px 100px 0px',
          '@bp2': {
            maxWidth: '800px',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          },
        }}
      >
        {albumReleases}
      </Box>
    </Box>
  );
};
