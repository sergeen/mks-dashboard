import {StrictMode, useState} from "react";
import {ThemeProvider} from "styled-components";

import {GlobalStyles} from "./components/GlobalStyles";
import Theme from "./styles/Theme";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";
import ModalHeader from "./components/ModalHeader";
import HighCharts from "./components/HighCharts";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <StrictMode>
      <ThemeProvider theme={isDarkTheme ? Theme.darkTheme : Theme.lightTheme}>
        <GlobalStyles />
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        <Overlay>
          <Modal>
            <ModalHeader />
            <HighCharts />
          </Modal>
        </Overlay>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
