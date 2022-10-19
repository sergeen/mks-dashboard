import {useTheme} from "styled-components";

import {StyledClose} from "./Close.styles";

const Close = ({toggleModal}) => {
  const theme = useTheme();

  return (
    <StyledClose onClick={() => toggleModal()}>
      <svg
        fill="none"
        height="12"
        viewBox="0 0 13 12"
        width="13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.792893 10.2929C0.402369 10.6834 0.402369 11.3166 0.792893 11.7071C1.18342 12.0976 1.81658 12.0976 2.20711 11.7071L6.5 7.41421L10.7929 11.7071C11.1834 12.0976 11.8166 12.0976 12.2071 11.7071C12.5976 11.3166 12.5976 10.6834 12.2071 10.2929L7.91421 6L12.2071 1.70711C12.5976 1.31658 12.5976 0.683418 12.2071 0.292894C11.8166 -0.0976312 11.1834 -0.0976312 10.7929 0.292894L6.5 4.58579L2.20711 0.292894C1.81658 -0.0976304 1.18342 -0.0976304 0.792893 0.292894C0.402369 0.683418 0.402369 1.31658 0.792893 1.70711L5.08579 6L0.792893 10.2929Z"
          fill={theme.defaultText}
        />
      </svg>
    </StyledClose>
  );
};

export default Close;
