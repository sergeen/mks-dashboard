import styled from "styled-components";

export const StyledSwitch = styled.label`
  display: inline-block;
  height: 24px;
  margin-left: 13px;
  position: relative;
  width: 50px;
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + .switch::before {
    background: ${(props) => props.theme.toggleDot};
    transform: translateX(25px);
  }
  input[type="checkbox"]:checked + .switch {
    background: ${(props) => props.theme.toggleBg};
  }
  .switch {
    background: ${(props) => props.theme.toggleBg};
    border-radius: 24px;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    &::before {
      background: ${(props) => props.theme.toggleDot};
      border-radius: 50%;
      content: "";
      height: 18px;
      left: 4px;
      position: absolute;
      top: 3px;
      transition: transform 0.3s ease;
      width: 18px;
    }
  }
`;
