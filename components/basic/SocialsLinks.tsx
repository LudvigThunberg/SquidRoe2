import { ContactLinkObject } from "../../models/responseModels";
import { Box } from "../styledComponents/Box";
import { SocialMediaLink } from "./SocialMediaLink";

interface SocialLinksProps {
  data: { data: ContactLinkObject[] };
  onContact?: boolean;
}

export const SocialsLinks = ({ data, onContact }: SocialLinksProps) => {
  const socialLinks = data.data.map((link) => {
    return <SocialMediaLink key={link.id} link={link} onContact={onContact} />;
  });
  return (
    <Box
      isOnContact={onContact}
      css={{
        display: "flex",
        gap: "10px",
        background: "transparent",
        "@bp2": {
          gap: "20px",
        },
      }}
    >
      {socialLinks}
    </Box>
  );
};
