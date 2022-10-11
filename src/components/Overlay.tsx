import React from "react";

import {StyledOverlay} from "./Overlay.styles";

type Props = {
  children?: React.ReactNode;
};

// TODO:
// interface Modal {
//   children: ReactElement<Modal>;
// }

const Overlay: React.FunctionComponent<Props> = ({children}) => {
  return <StyledOverlay>{children}</StyledOverlay>;
};

export default Overlay;
