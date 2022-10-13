import styled from "styled-components";

export const StyledSmallCards = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  &:hover {
    background-color: ${(props) => props.theme.hoverCardBg};
  }
  border-radius: 5px;
  color: ${(props) => props.theme.defaultText};
  cursor: pointer;
  gap: 27px;
  padding: 30px 30px 0px 24px;
  position: relative;
  div:nth-child(1) {
    position: absolute;
    right: 20px;
    top: 27px;
  }
  p,
  h2,
  h3 {
    font-family: "Inter Bold";
    font-size: 12px;
  }
  p {
    font-size: 14px;
    line-height: 85.5%;
  }
  .stats {
    display: flex;
    justify-content: space-between;
    padding-bottom: 27px;
    padding-top: 30px;
    width: 100%;
    h2 {
      font-size: 32px;
      letter-spacing: -0.04em;
      line-height: 85.5%;
    }
    > div {
      align-items: flex-end;
      gap: 4px;
      svg {
        height: 9px;
      }
    }
  }
`;
