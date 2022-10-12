import IconFacebook from "../assets/img/icon-facebook.svg?component";

import {StyledSocialHandle} from "./SocialHandle.styles";

// TODO:
// Look deeper in to the SVG issue with Vite

const SocialHandle = () => {
  return (
    <StyledSocialHandle>
      <IconFacebook></IconFacebook>
      <p>@nathanf</p>
    </StyledSocialHandle>
  );
};

export default SocialHandle;
