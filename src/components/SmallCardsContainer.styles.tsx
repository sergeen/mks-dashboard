import styled from "styled-components";

export const StyledSmallCardsContainer = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(4, auto);
  padding: 0;
  transition: padding, gap 500ms linear;
  @media (max-width: 1110px) {
    padding: 0 10px;
  }
  @media (max-width: 920px) {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1.2fr 1fr;
    grid-column-gap: 0;
    grid-row-gap: 4px;
    > div:nth-child(even) {
      div:nth-child(1) {
        display: none;
      }
    }
    > div:nth-last-child(1),
    > div:nth-last-child(2) {
      border-bottom: none;
    }
  }
`;
