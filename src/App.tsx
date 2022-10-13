import {StrictMode, useState, createContext} from "react";
import {ThemeProvider} from "styled-components";

import {GlobalStyles} from "./components/GlobalStyles";
import {providedContent} from "./components/providedContent";
import CardsContainer from "./components/CardsContainer";
import DashboardHeader from "./components/dashboardHeader";
import HighCharts from "./components/HighCharts";
import MainContainer from "./components/MainContainer";
import MediumCard from "./components/MediumCard";
import Modal from "./components/Modal";
import ModalHeader from "./components/ModalHeader";
import Overlay from "./components/Overlay";
import Theme from "./styles/Theme";
import SimpleTitle from "./components/SimpleTitle";
import SmallCardsContainer from "./components/SmallCardsContainer";
import SmallCard from "./components/SmallCard";

export const AppContext = createContext(); //REMOVE??
const dataInit = providedContent;

function App() {
  const [isModal, setIsModal] = useState(false);
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "light";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "dark" : "light"); // It's inverted??
  };

  const toggleModal = () => {
    console.log("");
    setIsModal(isModal ? false : true);
  };

  return (
    <StrictMode>
      <AppContext.Provider value={dataInit}>
        <ThemeProvider theme={isDarkTheme ? Theme.lightTheme : Theme.darkTheme}>
          <GlobalStyles />
          <MainContainer>
            <DashboardHeader isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <CardsContainer>
              <MediumCard
                handle={"@nathanf"}
                label={"FOLLOWERS"}
                site="facebook"
                toggleModal={toggleModal}
                value={1987}
                valueType="number"
                variation="+"
                variationValue={12}
                when="Today"
              />
              <MediumCard
                handle={"@nathanf"}
                label={"FOLLOWERS"}
                site="twitter"
                value={1044}
                valueType="number"
                variation="+"
                variationValue={99}
                when="Today"
              />
              <MediumCard
                handle={"@realnathanf"}
                label={"FOLLOWERS"}
                site="instagram"
                value={"11k"}
                valueType="number"
                variation="+"
                variationValue={1099}
                when="Today"
              />
              <MediumCard
                handle={"Nathan F."}
                label={"SUBSCRIBERS"}
                site="youtube"
                value={8239}
                valueType="number"
                variation="-"
                variationValue={144}
                when="Today"
              />
            </CardsContainer>
            <SimpleTitle />
            <SmallCardsContainer>
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </SmallCardsContainer>
            {isModal && (
              <Overlay>
                <Modal>
                  <ModalHeader toggleModal={toggleModal} />
                  <HighCharts />
                </Modal>
              </Overlay>
            )}
          </MainContainer>
        </ThemeProvider>
      </AppContext.Provider>
    </StrictMode>
  );
}

export default App;
