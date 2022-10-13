import styled from "styled-components";

export const StyledVariation = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  h3,
  p {
    color: ${(props) => (props.variation === "+" ? props.theme.positive : props.theme.negative)};
  }
  @media (max-width: 375px) {
    align-items: baseline;
    gap: 0;
  }
`;
