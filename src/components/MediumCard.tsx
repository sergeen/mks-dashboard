import {StyledMediumCard} from "./MediumCard.styles";
import SocialHandle from "./SocialHandle";
import Variation from "./Variation";

const MediumCard: React.FC<{
  value: number | string;
  label: string;
  handle: string;
  variation: "+" | "-";
  variationValue: number;
  when?: string;
  valueType?: "number" | "fraction";
  site?: "facebook" | "twitter" | "instagram" | "youtube";
}> = ({value, label, handle, variation, variationValue, when, valueType, site, toggleModal}) => {
  return (
    <StyledMediumCard onClick={() => toggleModal()} site={site}>
      <SocialHandle site={site} size="small" value={handle} />
      <div>
        <h2>{value}</h2>
        <p>{label}</p>
      </div>
      <Variation
        valueType={valueType}
        variation={variation}
        variationValue={variationValue}
        when={when}
      />
    </StyledMediumCard>
  );
};

export default MediumCard;
