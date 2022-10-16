import {useContext} from "react";

import {AppContext} from "../App";
import MediumCard from "../components/MediumCard";

import {StyledCardsContainer} from "./CardsContainer.styles";

const CardsContainer = ({toggleModal}) => {
  const contextData = useContext(AppContext);
  const cards = contextData.mainView;

  return (
    <StyledCardsContainer>
      {cards.map((item, index) => (
        <MediumCard
          key={index}
          handle={item.handle}
          label={item.label}
          site={item.site}
          toggleModal={toggleModal}
          value={item.value}
          valueType={item.valueType}
          variation={item.variation}
          variationValue={item.variationValue}
          when={item.when}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
