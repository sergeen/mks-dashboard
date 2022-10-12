import styled from "styled-components";
export const StyledModalHeader = styled.div`
  background-color: ${(props) => props.theme.topBgPattern};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 43px 60px 25px 60px;
  .top,
  .bottom {
    display: flex;
    gap: 10px;
  }
  .top {
    h3 {
      font-family: "Inter Bold";
      font-size: 28px;
    }
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
`;
