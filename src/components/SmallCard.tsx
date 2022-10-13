import {StyledSmallCards} from "./SmallCard.styles";
import SocialHandle from "./SocialHandle";
import Variation from "./Variation";

const SmallCard = () => {
  return (
    <StyledSmallCards>
      <SocialHandle site="facebook" />
      <div>
        <p>PageViews</p>
        <div className="stats">
          <h2>89</h2>
          <Variation valueType="fraction" variation="+" variationValue={3} />
        </div>
      </div>
    </StyledSmallCards>
  );
};

export default SmallCard;
