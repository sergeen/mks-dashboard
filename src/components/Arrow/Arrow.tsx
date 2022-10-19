import {useTheme} from "styled-components";

import {StyledArrow} from "./Arrow.styles";

export const Arrow = ({
  height = "7",
  width = "12",
  variation,
}: {
  height?: string;
  width?: string;
  variation: "+" | "-";
}) => {
  const theme = useTheme();
  const variationSign = variation === "+";
  const color = variationSign ? theme.positive : theme.negative;
  const transform = variationSign ? "rotate(0)" : "rotate(180)";
  const margin = variationSign ? 0 : 0.25;

  return (
    <StyledArrow height={height} margin={margin} transform={transform} width={width}>
      <path d="m0 4 4-4 4 4z" fill={color} fillRule="evenodd" />
    </StyledArrow>
  );
};
