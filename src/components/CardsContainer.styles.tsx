import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: repeat(4, auto);
  @media (max-width: 920px) {
    grid-column-gap: 10px;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 10px;
    padding: 0 10px;
  }
`;
