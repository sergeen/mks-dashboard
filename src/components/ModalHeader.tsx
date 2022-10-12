import Close from "./Close";
import LabeledStat from "./LabeledStat";
import {StyledModalHeader} from "./ModalHeader.styles";
import SocialHandle from "./SocialHandle";

// TODO:
// Map function, based on JSON

const ModalHeader = () => {
  return (
    <StyledModalHeader>
      <Close />
      <div className="top">
        <h3>Facebook followers</h3>
        <SocialHandle />
      </div>
      <div className="stats-container">
        <LabeledStat
          label={`Total 
          Followers`}
          value={1987}
          valueType={"number"}
        />
        <LabeledStat
          label={`New followers 
          in the past 10 days`}
          value={81}
          valueType={"number"}
          variation="+"
        />
        <LabeledStat
          label={`New followers 
          TODAY`}
          value={12}
          valueType={"number"}
          variation="+"
        />
      </div>
    </StyledModalHeader>
  );
};

export default ModalHeader;
