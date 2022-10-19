import {useContext} from "react";

import {AppContext} from "../../App";
import SmallCard from "../SmallCard/SmallCard";

import {StyledSmallCardsContainer} from "./SmallCardsContainer.styles";

const SmallCardsContainer = () => {
  const contextData = useContext(AppContext);
  const overviewData = contextData.overview;

  return (
    <StyledSmallCardsContainer>
      {overviewData.map((item, index) => (
        <SmallCard {...item} key={index}/>
      ))}
    </StyledSmallCardsContainer>
  );
};

export default SmallCardsContainer;
