import styled from "styled-components";

export const StyledSocialHandle = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  svg {
    height: 20px;
  }
  p {
    color: ${(props) => props.theme.defaultText};
    font-family: "Inter Bold";
    font-size: 14px;
  }
`;
