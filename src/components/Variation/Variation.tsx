import {StyledVariation} from "./Variation.styles";
import {Arrow} from "../Arrow/Arrow";

const Variation: React.FC<{
  variation?: "+" | "-";
  variationValue: number;
  when?: string;
  valueType?: "number" | "fraction";
}> = ({variation, variationValue, valueType, when}) => (
  <StyledVariation variation={variation}>
    {variation && <Arrow variation={variation} />}
    {valueType === "number" ? <h3>{variationValue}</h3> : <h3>{variationValue}%</h3>}
    {when && <p>{when}</p>}
  </StyledVariation>
);

export default Variation;
