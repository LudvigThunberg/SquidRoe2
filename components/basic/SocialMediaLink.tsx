import { ContactLinkObject } from '../../models/responseModels';
import { Img } from '../styledComponents/Img';
import { StyledALink } from '../styledComponents/StyledALink';

interface SocialMediaLinkProps {
  link: ContactLinkObject;
  onContact?: boolean;
}

export const SocialMediaLink = ({ link, onContact }: SocialMediaLinkProps) => {
  const { contactLink, iconUrl, email } = link.attributes;

  let href = contactLink;
  let target = '_blank';
  if (email) {
    href = `mailto:${email}`;
    target = '';
  }

  return (
    <StyledALink href={href} target={target} onContact={onContact}>
      <Img
        css={{
          width: '100%',
          borderRadius: '50%',
        }}
        src={iconUrl}
      />
    </StyledALink>
  );
};
