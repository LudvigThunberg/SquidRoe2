import { useEffect, useState } from 'react';
import { AboutModel } from '../../models/responseModels';
import { Box } from '../styledComponents/Box';
import { Img } from '../styledComponents/Img';
import { Paragraph } from '../styledComponents/Paragraph';

interface SingleAboutProps {
  aboutSection: AboutModel;
}

export const AboutSection = ({ aboutSection }: SingleAboutProps) => {
  const { title, text, imageUrl, order } = aboutSection.attributes;
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    if (order % 2 === 0) {
      setIsEven(true);
    }
  }, []);

  return (
    <div>
      {isEven ? (
        <Box css={{ display: 'flex', gap: '10px' }}>
          <Box
            css={{
              background: 'transparent',
              width: '49%',
              borderRadius: '50%',
              zIndex: '1',
            }}
          >
            <Paragraph
              css={{
                fontSize: '0.5rem',
                color: '$whiteGray',
                background: 'transparent',
              }}
            >
              {text}
            </Paragraph>
          </Box>
          <Box
            css={{
              background: 'transparent',
              width: '49%',
              borderRadius: '50%',
              zIndex: '1',
            }}
          >
            <Img
              css={{
                width: '100%',
                borderRadius: '50%',
              }}
              src={imageUrl}
              alt={title}
            />
          </Box>
        </Box>
      ) : (
        <Box css={{ display: 'flex', gap: '10px' }}>
          <Box
            css={{
              background: 'transparent',
              width: '50%',
              borderRadius: '50%',
              zIndex: '1',
            }}
          >
            <Img
              css={{
                width: '100%',
                borderRadius: '50%',
              }}
              src={imageUrl}
              alt={title}
            />
          </Box>
          <Box
            css={{
              background: 'transparent',
              width: '50%',
              borderRadius: '50%',
              zIndex: '1',
            }}
          >
            <Paragraph
              css={{
                fontSize: '0.5rem',
                color: '$whiteGray',
                background: 'transparent',
              }}
            >
              {text}
            </Paragraph>
          </Box>
        </Box>
      )}
    </div>
  );
};
