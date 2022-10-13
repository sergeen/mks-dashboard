import {useTheme} from "styled-components";

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
  const color = variation === "+" ? theme.positive : theme.negative;
  const transform = variation === "+" ? "rotate(0)" : "rotate(180)";

  return (
    <svg
      height={height + "px"}
      transform={transform}
      width={width + "px"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 4 4-4 4 4z" fill={color} fillRule="evenodd" />
    </svg>
  );
};
