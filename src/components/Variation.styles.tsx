import styled from "styled-components";

export const StyledVariation = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  h3 {
    color: ${(props) => props.theme.positive};
  }
  @media (max-width: 375px) {
    align-items: baseline;
    gap: 0;
  }
`;
