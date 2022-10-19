import {toCompactNumber} from "../../helpers/numbers";

import {StyledMediumCard} from "./MediumCard.styles";
import SocialHandle from "../SocialHandle/SocialHandle";
import Variation from "../Variation/Variation";

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
    <StyledMediumCard site={site} onClick={() => toggleModal()}>
      <SocialHandle site={site} size="small" value={handle} />
      <div>
        <h2>{toCompactNumber(value)}</h2>
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
