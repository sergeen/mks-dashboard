import styled from "styled-components";

export const StyledSocialHandle = styled.div<{size?: "small"}>`
  align-items: center;
  display: flex;
  gap: 10px;
  svg {
    height: 20px;
  }
  p {
    color: ${(props) => props.theme.defaultText};
    font-family: "Inter Bold";
    font-size: ${(props) => (props.size === "small" ? "12px" : "14px")};
  }
`;
