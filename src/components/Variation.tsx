import {StyledVariation} from "./Variation.styles";
import {Arrow} from "./Arrow";

const Variation: React.FC<{
  variation: "+" | "-" | undefined;
  value: number;
  when?: string;
  valueType?: "number" | "fraction";
}> = ({variation, value, valueType, when}) => (
  <StyledVariation>
    {variation !== undefined ? <Arrow variation={variation} /> : null}
    {valueType === "number" ? <h3>{value}</h3> : <h3>{value}%</h3>}
    {when && <p>{when}</p>}
  </StyledVariation>
);

export default Variation;
