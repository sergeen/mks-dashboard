import {StrictMode, useEffect, useState} from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import normalize from "styled-normalize";

import Theme from "./styles/Theme";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <StrictMode>
      <ThemeProvider theme={isDarkTheme ? Theme.darkTheme : Theme.lightTheme}>
        <GlobalStyle />
        <Overlay>
          <Modal>
            <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
          </Modal>
        </Overlay>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
