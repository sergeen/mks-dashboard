import styled from "styled-components";

export const StyledToggle = styled.div`
  align-items: center;
  display: flex;
  p {
    color: ${(props) => props.theme.toggleText};
    font-family: "Inter Bold";
    font-size: 14px;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;
