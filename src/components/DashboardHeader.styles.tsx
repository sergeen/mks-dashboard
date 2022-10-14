import styled from "styled-components";

export const StyledDashboardHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div:nth-child(1) {
    h1,
    h2 {
      font-family: "Inter Bold";
    }
    h1 {
      color: ${(props) => props.theme.defaultText};
      font-size: 28px;
      margin: 0 0 10px 0;
    }
    h2 {
      color: ${(props) => props.theme.headerSubtitle};
      font-size: 14px;
    }
  }
  @media (max-width: 1110px) {
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column-reverse;
    padding: 20px 10px 0 10px;
    gap: 10px;
    div:nth-child(1) {
      h1 {
        font-size: 16px;
      }
      h2 {
        font-size: 12px;
      }
    }
  }
`;
