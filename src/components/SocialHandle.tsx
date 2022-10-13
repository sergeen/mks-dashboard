import IconFacebook from "../assets/img/icon-facebook.svg?component";
import IconTwitter from "../assets/img/icon-twitter.svg?component";
import IconInstagram from "../assets/img/icon-instagram.svg?component";
import IconYoutube from "../assets/img/icon-youtube.svg?component";

import {StyledSocialHandle} from "./SocialHandle.styles";

const SocialHandle: React.FC<{
  value?: string;
  size?: "small";
  site?: "facebook" | "twitter" | "instagram" | "youtube";
}> = ({value, size, site}) => {
  return (
    <StyledSocialHandle site={site} size={size}>
      {(() => {
        switch (site) {
          case "facebook":
            return <IconFacebook />;
          case "twitter":
            return <IconTwitter />;
          case "instagram":
            return <IconInstagram />;
          case "youtube":
            return <IconYoutube />;
          default:
            return null;
        }
      })()}
      <p>{value}</p>
    </StyledSocialHandle>
  );
};

export default SocialHandle;
