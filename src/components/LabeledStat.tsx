import {StyledLabeledStat} from "./LabeledStats.styles";
import Variation from "./Variation";

const LabeledStat: React.FC<{
  value: number;
  valueType: "number" | "fraction";
  label: string;
  variation?: "+" | "-";
}> = ({value, valueType, label, variation}) => {
  return variation === undefined ? (
    <StyledLabeledStat>
      <h3>{value}</h3>
      <p>{label}</p>
    </StyledLabeledStat>
  ) : (
    <StyledLabeledStat variation={variation}>
      <Variation value={value} valueType={valueType} variation={variation} />
      <p>{label}</p>
    </StyledLabeledStat>
  );
};

export default LabeledStat;
