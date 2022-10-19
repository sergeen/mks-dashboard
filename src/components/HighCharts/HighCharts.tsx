import {useEffect, useState} from "react";
import {useTheme} from "styled-components";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {SyledHighCharts} from "./HighCharts.styles";
import HighChartsOptions from "./HighChartsOptions";

const HighCharts = () => {
  const height = () =>
    Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const [currentHeight, setCurrentHeight] = useState(height());

  useEffect(() => {
    function handleResize() {
      setCurrentHeight(height());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <SyledHighCharts>
      <HighchartsReact
        highcharts={Highcharts}
        options={HighChartsOptions(useTheme(), currentHeight / 2.7)}
      />
    </SyledHighCharts>
  );
};

export default HighCharts;
