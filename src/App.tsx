import {StrictMode, useState, createContext} from "react";
import {ThemeProvider} from "styled-components";

import {GlobalStyles} from "./styles/GlobalStyles";
import {providedContent} from "./content/providedContent";
import CardsContainer from "./components/CardContainer/CardsContainer";
import DashboardHeader from "./components/Dashboard/DashboardHeader";
import HighCharts from "./components/HighCharts/HighCharts";
import MainContainer from "./components/MainContainer/MainContainer";
import Modal from "./components/Modal/Modal";
import ModalHeader from "./components/ModalHeader/ModalHeader";
import Overlay from "./components/Overlay/Overlay";
import Theme from "./styles/Theme";
import SimpleTitle from "./components/SimpleTitle/SimpleTitle";
import SmallCardsContainer from "./components/SmallCardsContainer/SmallCardsContainer";

const dataInit = providedContent;

export const AppContext = createContext(dataInit);

function App() {
  const [isModal, setIsModal] = useState(false);
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "light";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "dark" : "light"); // It's inverted??
  };

  const toggleModal = () => {
    setIsModal(isModal ? false : true);
  };

  return (
    <StrictMode>
      <AppContext.Provider value={dataInit}>
        <ThemeProvider theme={isDarkTheme ? Theme.lightTheme : Theme.darkTheme}>
          <GlobalStyles />
          <MainContainer>
            <DashboardHeader isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            <CardsContainer toggleModal={toggleModal} />
            <SimpleTitle />
            <SmallCardsContainer />
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
