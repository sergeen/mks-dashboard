import styled from "styled-components";

export const StyledOverlay = styled.div`
  background-color: ${(props) => props.theme.overlay};
  height: 100vh;
  width: 100vw;
`;
