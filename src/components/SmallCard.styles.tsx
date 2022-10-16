import styled from "styled-components";

export const StyledSmallCards = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 5px;
  color: ${(props) => props.theme.defaultText};
  cursor: pointer;
  gap: 27px;
  padding: 30px 30px 27px 24px;
  position: relative;
  transition: padding, gap 500ms linear;
  &:hover {
    background-color: ${(props) => props.theme.hoverCardBg};
  }
  div:nth-child(1) {
    /* Social Icon */
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
    color: ${(props) => props.theme.smallCardTitle};
  }
  .stats {
    display: flex;
    justify-content: space-between;
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
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    div:nth-child(1) {
      /* Social Icon */
      position: relative;
      right: initial;
      top: initial;
    }
    .stats {
      padding-top: 10px;
      h2 {
        font-size: 24px;
      }
    }
  }
  @media (max-width: 768px) {
    gap: 8px;
    .stats {
      padding-top: 6px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      > div {
        justify-content: flex-end;
      }
      h2 {
        font-size: 24px;
      }
    }
    p {
      font-size: 12px;
      line-height: 100%;
    }
  }
  @media (max-width: 425px) {
    border-radius: 0;
    border-bottom: 1px solid ${(props) => props.theme.separator};
    background-color: ${(props) => props.theme.pageBg};
    display: flex;
    flex-direction: row;
    padding: 4px 10px 4px 0;
    gap: 4px;
    div:nth-child(2) {
      width: 100%;
    }
    .stats {
      padding: 6px 0 0 0;
      flex-direction: row;
      gap: 0px;
      > div {
        justify-content: end;
      }
      h2 {
        font-size: 18px;
      }
    }
    p {
      font-size: 12px;
      line-height: 100%;
    }
  }
  @media (max-width: 320px) {
    .stats {
      flex-direction: column;
      gap: 4px;
    }
  }
`;
