import {StrictMode, useState, createContext} from "react";
import {ThemeProvider} from "styled-components";

import {providedContent} from "./components/providedContent";
import {GlobalStyles} from "./components/GlobalStyles";
import Theme from "./styles/Theme";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";
import ModalHeader from "./components/ModalHeader";
import HighCharts from "./components/HighCharts";

export const AppContext = createContext();
const dataInit = providedContent;
const appInit = {modal: false, darkTheme: false};

function App() {
  const [appState, setAppState] = useState(appInit);

  return (
    <StrictMode>
      <AppContext.Provider value={dataInit}>
        <ThemeProvider theme={appState.darkTheme ? Theme.darkTheme : Theme.lightTheme}>
          <GlobalStyles />
          <button
            onClick={() =>
              setAppState((prevState) => ({...prevState, darkTheme: !prevState.darkTheme}))
            }
          >
            Toggle
          </button>
          {appState.modal && (
            <Overlay>
              <Modal>
                <ModalHeader />
                <HighCharts />
              </Modal>
            </Overlay>
          )}
        </ThemeProvider>
      </AppContext.Provider>
    </StrictMode>
  );
}

export default App;
