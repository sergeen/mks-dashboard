import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: ${(props) => props.theme.modalBg};
  border-radius: 16px;
  height: 100%;
  max-height: 550px;
  max-width: 1000px;
  overflow: hidden;
  transition: background-color 500ms linear;
  width: 100%;
`;
