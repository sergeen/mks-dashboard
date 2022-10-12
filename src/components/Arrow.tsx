import Colors from "../styles/Colors";

// TODO:
// Extend SVGProps

export const Arrow = ({
  height = "7px",
  width = "12px",
  variation,
}: {
  height: string;
  width: string;
  variation: string;
}) => {
  const color = variation === "+" ? Colors.primary.limeGreen : Colors.primary.brightRed;
  const transform = variation === "+" ? "rotate(0)" : "rotate(180)";

  return (
    <svg height={height} transform={transform} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="m0 4 4-4 4 4z" fill={color} fillRule="evenodd" />
    </svg>
  );
};
