import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import normalize from "styled-normalize";

// TODO:
// Use https://github.com/rsms/inter

import InterRegular from "../assets/fonts/Inter-Regular.woff";
import InterRegular2 from "../assets/fonts/Inter-Regular.woff2";
import InterLight from "../assets/fonts/Inter-Light.woff";
import InterLight2 from "../assets/fonts/Inter-Light.woff2";
import InterBold from "../assets/fonts/Inter-Bold.woff";
import InterBold2 from "../assets/fonts/Inter-Bold.woff2";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${normalize}
  html, body {
    min-width: 100vw;
    min-height: 100vh;
  }
  body {
    background-color: ${(props) => props.theme.pageBg};
    transition: height, background-color 300ms linear;
  }
  #root {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    &::before {
      background-color: ${(props) => props.theme.topBgPattern};
      content: "";
      height: 244px;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      border-radius: 0 0 20px 20px;
      transition: height, background-color 300ms linear;
    }
    @media (max-width: 768px) {
      &::before {
        height: 80%;
      }
    }
  }
  @font-face {
        font-family: 'Inter Regular';
        src: local('Inter Regular'), local('Inter-regular'),
        url(${InterRegular}) format('woff2'),
        url(${InterRegular2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter Light';
        src: local('Inter Light'), local('Inter-light'),
        url(${InterLight}) format('woff2'),
        url(${InterLight2}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter Bold';
        src: local('Inter Bold'), local('Inter-bold'),
        url(${InterBold}) format('woff2'),
        url(${InterBold2}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
