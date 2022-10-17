import styled from "styled-components";

export const StyledMainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 1110px;
  padding: 38px 0;
  width: 100%;
  z-index: 0;
  @media (max-width: 768px) {
    padding: 10px 0 20px 0;
    gap: 20px;
  }
`;
