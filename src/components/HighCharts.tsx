import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Colors from "../helpers/colors";

const options = {
  chart: {
    type: "spline",
  },
  legend: {
    enabled: false,
  },
  title: {
    text: "My chart",
  },
  tooltip: {
    backgroundColor: Colors.primary.white,
    borderWidth: 1,
    borderColor: Colors.lightTheme.lightGrayishBlueCardBg,
    borderRadius: 0,
    shadow: false,
    shape: "rect",
    formatter: function () {
      return `<p style="color:${Colors.lightTheme.desaturatedPurpleChart}">${this.y} new followers</p>`;
    },
    positioner: function (a, b, point) {
      if (point.plotX - 70 > this.chart.plotLeft) {
        return {x: point.plotX, y: point.plotY + b * 2};
      } else {
        return {x: point.plotX + 100, y: point.plotY + 25};
      }
    },
  },
  plotOptions: {
    xAxis: {
      max: 13,
      min: 3.5,
    },
    yAxis: {
      title: undefined, // Why it's not working?
      max: 12,
      min: 0,
    },
    series: {
      pointStart: 4,
      allowPointSelect: true,
      lineWidth: 1,
      color: Colors.lightTheme.desaturatedPurpleChart,
      states: {
        hover: {
          enabled: false,
        },
      },
      marker: {
        fillColor: Colors.primary.white,
        lineWidth: 2,
        lineColor: null,
        radius: 5,
        states: {
          select: {
            fillColor: Colors.lightTheme.desaturatedPurpleChart,
            lineWidth: 0,
            radius: 7.5,
          },
          hover: {
            enabled: false,
          },
        },
      },
    },
  },
  series: [
    {
      data: [[3, 4], 3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
    },
  ],
};

const HighCharts = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default HighCharts;
