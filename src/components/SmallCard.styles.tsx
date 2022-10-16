import styled from "styled-components";

export const StyledSmallCards = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 5px;
  color: ${(props) => props.theme.defaultText};
  cursor: pointer;
  gap: 27px;
  padding: 30px 30px 0px 24px;
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
      text-transform: lowercase;
    }
    > div {
      align-items: flex-end;
      gap: 4px;
      svg {
        height: 9px;
      }
    }
  }
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 8px;
    div:nth-child(1) {
      /* Social Icon */
      position: relative;
      right: 0;
      top: 0;
    }
    .stats {
      padding: 6px 0;
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
    border-bottom: 1px solid ${(props) => props.theme.defaultText};
    background-color: ${(props) => props.theme.pageBg};
    display: flex;
    flex-direction: row;
    padding: 4px 10px;
    gap: 4px;
    div:nth-child(2) {
      width: 100%;
    }
    .stats {
      padding: 6px 0 0 0;
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
  @media (max-width: 425px) {
    border-radius: 0;
    border-bottom: 1px solid ${(props) => props.theme.defaultText};
    background-color: ${(props) => props.theme.pageBg};
    display: flex;
    flex-direction: row;
    padding: 4px 10px;
    gap: 4px;
    div:nth-child(2) {
      width: 100%;
    }
    .stats {
      padding: 6px 0 0 0;
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
  @media (max-width: 375px) {
    gap: 0;
    padding: 4px 10px 4px 0;
    div:nth-child(2) {
      p {
        font-size: 10px;
      }
    }
    .stats {
      h2 {
        font-size: 12px;
      }
    }
  }
`;
