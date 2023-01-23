import { motion } from 'framer-motion';
import { styled } from '../../stitches.config';

export const MotionContainer = styled(motion.div, {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'transparent',
  '@bp2': {
    height: '100vh',
  },
});
