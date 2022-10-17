import styled from "styled-components";

export const StyledSimpleTitle = styled.div`
  h2 {
    color: ${(props) => props.theme.defaultText};
    font-family: "Inter Bold";
    font-size: 24px;
    letter-spacing: -1.5%;
  }
  @media (max-width: 1110px) {
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 14px;
    }
  }
`;
