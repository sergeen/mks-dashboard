import Close from "../Close/Close";
import LabeledStat from "../LabeledStats/LabeledStat";
import {StyledModalHeader} from "./ModalHeader.styles";
import SocialHandle from "../SocialHandle/SocialHandle";

const ModalHeader = ({toggleModal}) => {
  return (
    <StyledModalHeader>
      <Close toggleModal={toggleModal}/>
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
