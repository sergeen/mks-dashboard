import {StyledLabeledStat} from "./LabeledStats.styles";
import Variation from "./Variation";

const LabeledStat: React.FC<{
  value: number;
  valueType: "number" | "fraction";
  label: string;
  labelPosition: "right" | "bottom";
  variation?: "+" | "-";
}> = ({value, valueType, label, labelPosition, variation}) => {
  return variation === undefined ? (
    <StyledLabeledStat>
      <h3>{value}</h3>
      <p>{label}</p>
    </StyledLabeledStat>
  ) : (
    <StyledLabeledStat variation={variation} labelPosition={labelPosition}>
      <Variation variation={variation} value={value} valueType={valueType} />
      <p>{label}</p>
    </StyledLabeledStat>
  );
};

export default LabeledStat;
