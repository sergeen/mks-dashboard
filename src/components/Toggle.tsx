import Switch from "./Switch";
import {StyledToggle} from "./Toggle.styles";

const Toggle = ({toggleTheme, isDarkTheme}) => {
  return (
    <StyledToggle>
      <p>Dark Mode</p>
      <Switch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    </StyledToggle>
  );
};

export default Toggle;
