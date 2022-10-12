import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: ${(props) => props.theme.modalBg};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-height: 550px;
  max-width: 1000px;
  overflow: hidden;
  position: relative;
  transition: background-color 500ms linear;
  width: 100%;
`;
