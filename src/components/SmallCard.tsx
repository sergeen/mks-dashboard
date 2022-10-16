import {StyledSmallCards} from "./SmallCard.styles";
import SocialHandle from "./SocialHandle";
import Variation from "./Variation";

import {toCompactNumber} from "../helpers/numbers";

const SmallCard = ({site, title, value, variation, variationType, variationAmount}) => {
  return (
    <StyledSmallCards>
      <SocialHandle site={site} />
      <div>
        <p>{title}</p>
        <div className="stats">
          <h2>{toCompactNumber(value)}</h2>
          <Variation
            valueType={variationType}
            variation={variation}
            variationValue={variationAmount}
          />
        </div>
      </div>
    </StyledSmallCards>
  );
};

export default SmallCard;
