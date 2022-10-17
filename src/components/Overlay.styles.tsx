import styled from "styled-components";

export const StyledOverlay = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.overlay};
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 14px;
  position: fixed;
  top: 0;
  width: 100%;
`;
