import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighChartsOptions from "./HighChartsOptions";
import {SyledHighCharts} from "./HighCharts.styles";

import { useTheme } from 'styled-components';

const HighCharts = () => {
  return (
    <SyledHighCharts>
      <HighchartsReact highcharts={Highcharts} options={HighChartsOptions(useTheme())} />
    </SyledHighCharts>
  );
};

export default HighCharts;
