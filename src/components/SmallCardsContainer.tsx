import {useContext} from "react";

import {AppContext} from "../App";
import SmallCard from "../components/SmallCard";

import {StyledSmallCardsContainer} from "./SmallCardsContainer.styles";

const SmallCardsContainer = () => {
  const contextData = useContext(AppContext);
  const overviewData = contextData.overview;

  return (
    <StyledSmallCardsContainer>
      {overviewData.map((item) => (
        <SmallCard {...item} />
      ))}
    </StyledSmallCardsContainer>
  );
};

export default SmallCardsContainer;
