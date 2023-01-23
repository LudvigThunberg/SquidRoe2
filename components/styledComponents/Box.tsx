import { styled } from '../../stitches.config';

export const Box = styled('div', {
  background: 'transparent',
  transition: 'opacity 0.5s ease-in-out',
  variants: {
    isOpen: {
      true: {
        opacity: '0',
        overflowY: 'hidden',
      },
      false: {
        right: '1',
      },
    },
    isOnContact: {
      true: {
        maxWidth: '300px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '@bp2': {
          maxWidth: '500px',
          paddingBottom: '0px',
        },
        '@bp3': {
          flexWrap: 'nowrap',
          maxWidth: '1000px',
        },
      },
      false: {
        paddingBottom: '100px',
      },
    },
    variant: {
      contentContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '3px',
        background: '$spotifyGray',
        maxWidth: '320px',
        '@bp2': {
          maxWidth: '740px',
        },
      },
    },
  },
});
