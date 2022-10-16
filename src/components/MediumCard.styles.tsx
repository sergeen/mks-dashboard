import styled from "styled-components";

import Colors from "../styles/Colors";

export const StyledMediumCard = styled.div`
  &::before {
    background: ${(props) =>
      props.site === "facebook"
        ? Colors.primary.facebook
        : props.site === "twitter"
        ? Colors.primary.twitter
        : props.site === "instagram"
        ? Colors.primary.instagram
        : props.site === "youtube"
        ? Colors.primary.youTube
        : null};
    content: "";
    height: 4px;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.hoverCardBg};
  }
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 5px;
  color: ${(props) => props.theme.defaultText};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  padding: 32px 0 25px 0;
  position: relative;
  transition: background-color 200ms linear;
  transition: padding, gap 500ms linear;

  div {
    display: flex;
    justify-content: center;
  }
  div:nth-child(2) {
    flex-direction: column;
    gap: 11px;
    padding: 16px 18px;
    h2 {
      color: ${(props) => props.theme.defaultText};
      font-family: "Inter Bold";
      font-size: 56px;
      letter-spacing: -0.04em;
      line-height: 85.5%;
      text-align: center;
      text-transform: lowercase;
    }
    p {
      color: ${(props) => props.theme.defaultText};
      font-family: "Inter Light";
      font-size: 12px;
      letter-spacing: 0.425em;
      line-height: 100%;
      text-align: center;
      text-transform: uppercase;
    }
  }
  div:nth-child(3) {
    gap: 4px;
    h3,
    p {
      font-family: "Inter Bold";
      font-size: 12px;
    }
  }
  @media (max-width: 920px) {
    div:nth-child(2) {
      gap: 8px;
      padding: 8px 10px;
      h2 {
        font-size: 42px;
      }
      p {
        font-size: 10px;
        letter-spacing: 0.2em;
      }
    }
  }
  @media (max-width: 768px) {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));
    gap: 8px;
    padding: 22px 0 14px 0;
  }
  @media (max-width: 375px) {
    div:nth-child(2) {
      h2 {
        font-size: 32px;
      }
    }
  }
`;
