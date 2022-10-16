import {StrictMode, useState, createContext} from "react";
import {ThemeProvider} from "styled-components";

import {GlobalStyles} from "./components/GlobalStyles";
import {providedContent} from "./components/providedContent";
import CardsContainer from "./components/CardsContainer";
import DashboardHeader from "./components/DashboardHeader";
import HighCharts from "./components/HighCharts";
import MainContainer from "./components/MainContainer";
import Modal from "./components/Modal";
import ModalHeader from "./components/ModalHeader";
import Overlay from "./components/Overlay";
import Theme from "./styles/Theme";
import SimpleTitle from "./components/SimpleTitle";
import SmallCardsContainer from "./components/SmallCardsContainer";

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
