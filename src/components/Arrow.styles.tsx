import styled from "styled-components";

export const StyledArrow = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  margin-bottom: ${(props) => props.margin + "em"};
  height: ${(props) => props.height + "px"};
  transform: ${(props) => props.transform};
  width: ${(props) => props.width + "px"};
`;
