import styled from "styled-components";
export const StyledModalHeader = styled.div`
  background-color: ${(props) => props.theme.topBgPattern};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 43px 60px 25px 60px;
  transition: padding 500ms linear;
  .top,
  .stats-container {
    display: flex;
  }
  .top {
    h3 {
      color: ${(props) => props.theme.defaultText};
      font-family: "Inter Bold";
      font-size: 28px;
    }
    flex-direction: column;
    gap: 16px;
  }
  .stats-container {
    gap: 10px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
    .top {
      align-items: center;
      gap: 8px;
      h3 {
        font-size: 18px;
      }
    }
    .stats-container {
      justify-content: center;
      gap: 10%;
    }
  }
  @media (max-width: 375px) {
    .stats-container {
      flex-direction: column;
      gap: 4px;
    }
  }
`;
