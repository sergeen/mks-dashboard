import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  transition: all 500ms;
  @media (max-width: 1110px) {
    padding: 0 10px;
  }
  @media (max-width: 920px) {
    grid-column-gap: 10px;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    padding: 0 10px;
  }
`;
