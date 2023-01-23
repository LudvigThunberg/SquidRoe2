import { styled } from '../../stitches.config';

export const BackgroundBox = styled('div', {
  height: '100vh',
  width: '100vw',
  backgroundColor: '$black',
  backgroundImage:
    'url(/assets/BackgroundSquidarms.png),url(/assets/Background_image_w_opacity.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  overflowX: 'hidden',
});
