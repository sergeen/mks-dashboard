import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighChartsOptions from "./HighChartsOptions";

const HighCharts = () => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={HighChartsOptions} />
    </>
  );
};

export default HighCharts;
