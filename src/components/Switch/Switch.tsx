import React, {useState} from "react";

import {StyledSwitch} from "./Switch.styles";

function Switch({toggleTheme, isDarkTheme}) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <StyledSwitch>
      <input checked={isToggled} type="checkbox" onChange={onToggle} />
      <span className="switch" />
    </StyledSwitch>
  );
}
export default Switch;
