/* eslint-disable no-nested-ternary */
import { ContactLinkObject } from '../../models/responseModels';
import { Img } from '../styledComponents/Img';
import { StyledALink } from '../styledComponents/StyledALink';
import { StyledContactPageLink } from '../styledComponents/StyledContactPageLink';

interface SocialMediaLinkProps {
  link: ContactLinkObject;
  onContact?: boolean;
}

export const SocialMediaLink = ({ link, onContact }: SocialMediaLinkProps) => {
  const { contactLink, iconUrl, email } = link.attributes;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {onContact && email ? (
        <StyledContactPageLink href={`mailto:${email}`}>
          <Img
            css={{
              width: '100%',
              borderRadius: '50%',
            }}
            src={iconUrl}
          />
        </StyledContactPageLink>
      ) : onContact && contactLink ? (
        <StyledContactPageLink href={contactLink} target="_blank">
          <Img
            css={{
              width: '100%',
              borderRadius: '50%',
            }}
            src={iconUrl}
          />
        </StyledContactPageLink>
      ) : (
        contactLink && (
          <StyledALink href={contactLink} target="_blank">
            <Img
              css={{
                width: '100%',
                borderRadius: '50%',
              }}
              src={iconUrl}
            />
          </StyledALink>
        )
      )}
    </>
  );
};
