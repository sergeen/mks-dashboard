import {StyledDashboardHeader} from "./DashboardHeader.styles";
import Toggle from "../Toggle/Toggle";

const DashboardHeader = ({toggleTheme, isDarkTheme}) => {
  return (
    <StyledDashboardHeader>
      <div>
        <h1>Social Media Dashboard</h1>
        <h2>Total Followers: 23.004</h2>
      </div>
      <Toggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
    </StyledDashboardHeader>
  );
};

export default DashboardHeader;
