import { pairLinkAndIcons } from '../../helpers/linkIconPairingHelper';
import { IconLinkModel } from '../../models/helperModels';
import { IconModelResponse, ReleaseModel } from '../../models/responseModels';
import { Box } from '../styledComponents/Box';
import { Heading } from '../styledComponents/Heading';
import { Img } from '../styledComponents/Img';
import { StyledALink } from '../styledComponents/StyledALink';

interface AlbumProps {
  album: ReleaseModel;
  icons: IconModelResponse;
}

export const Album = ({ album, icons }: AlbumProps) => {
  const { artist, coverArt, bandcampEmbed, title, remixedBy } = album;

  const allIconLinks: IconLinkModel[] = [];

  icons.data.forEach((icon) => {
    const iconLink = pairLinkAndIcons(icon, album);
    if (iconLink) {
      allIconLinks.push(iconLink);
    }
  });

  const iconLinks = allIconLinks.map((iconLink) => (
    <StyledALink
      key={iconLink.id}
      target="_blank"
      href={iconLink.link}
      css={{ background: 'transparent', width: '30px' }}
    >
      <Img src={iconLink.icon} alt={iconLink.name} />
    </StyledALink>
  ));

  return (
    <Box variant="contentContainer">
      <Box css={{ paddingBottom: '10px', display: 'flex', gap: '10px' }}>
        <Heading as="h3" css={{ fontSize: '11px' }}>
          {artist} - {title}
        </Heading>
        {remixedBy && (
          <Heading as="h3" css={{ fontSize: '11px' }}>
            ({remixedBy} Remix)
          </Heading>
        )}
      </Box>

      <Box
        css={{
          maxWidth: '320px',
          display: 'grid',
          gap: '20px',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '124px 124px',
          '@bp2': {
            maxWidth: '800px',
            gridTemplateColumns: '1fr 1fr 2fr',
            gridTemplateRows: '124px',
          },
        }}
      >
        <Box
          css={{
            minWidth: '80px',
            maxWidth: '124px',
            gridColumn: '1 span 1',
            gridRow: '1',
            justifySelf: 'end',
            '@bp2': {
              justifySelf: 'start',
            },
          }}
        >
          <Img css={{ borderRadius: '2px' }} src={coverArt} />
        </Box>
        <Box
          css={{
            gridColumn: '2 span 1',
            gridRow: '1',
            maxHeight: '124',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifySelf: 'start',
            '@bp2': {
              justifySelf: 'center',
            },
          }}
        >
          {iconLinks}
        </Box>

        <Box
          css={{
            gridRow: '2',
            gridColumnStart: '1',
            gridColumnEnd: '3',
            justifySelf: 'center',
            '@bp2': {
              gridRow: '1',
              gridColumnStart: '3',
              gridColumnEnd: '4',
              justifySelf: 'end',
            },
          }}
        >
          <Box
            css={{
              gridColumn: '1 3',
              maxWidth: '399px',
              minWidth: '250px',
            }}
            dangerouslySetInnerHTML={{ __html: bandcampEmbed }}
          />
        </Box>
      </Box>
    </Box>
  );
};
