import styled from "styled-components";

export const StyledLabeledStat = styled.div`
  align-items: center;
  display: flex;
  gap: 17px;
  h3 {
    color: ${(props) =>
      props.variation !== undefined
        ? props.variation === "+"
          ? props.theme.positive
          : props.theme.negative
        : props.theme.lightText};
    font-family: "Inter Bold";
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 34px;
    text-align: left;
  }
  p {
    color: ${(props) => props.theme.lightText};
    font-family: "Inter Light";
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.015em;
    line-height: 17px;
    text-align: left;
    white-space: pre-line;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: middle;
    gap: 11px;
    p {
      text-align: center;
    }
  }
  @media (max-width: 425px) {
    gap: 4px;
    h3 {
      font-size: 32px;
    }
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 375px) {
    flex-direction: row;
    justify-content: center;
    h3 {
      font-size: 14px;
      line-height: 14px;
    }
    p {
      font-size: 12px;
      white-space: normal;
      text-align: left;
    }
  }
`;
