import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighChartsOptions from "./HighChartsOptions";

const HighCharts = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={HighChartsOptions} />
  </div>
);

export default HighCharts;
