const HighChartsOptions = (theme) => ({
  chart: {
    type: "spline",
    height: 34 + "%",
    backgroundColor: theme.chartBackgorundcolor,
  },
  xAxis: {
    title: undefined,
    gridLineWidth: 1,
    gridLineDashStyle: "shortDash",
    lineColor: theme.chartLines,
    lineWidth: 1,
    max: 13,
    min: 4,
  },
  yAxis: {
    title: undefined,
    gridLineWidth: 1,
    gridLineDashStyle: "shortDash",
    lineColor: theme.chartLines,
    lineWidth: 1,
    max: 12,
    min: 0,
    tickInterval: 2,
  },
  legend: {
    enabled: false,
  },
  title: {
    text: "May 4 - May 13",
    align: "left",
    y: 30,
    x: 0,
    margin: 40,
    style: {
      color: theme.defaultText,
    },
  },
  tooltip: {
    backgroundColor: theme.chartTooltipBg,
    borderWidth: 1,
    borderColor: theme.chartTooltipBorder,
    borderRadius: 0,
    shadow: false,
    shape: "rect",
    formatter: function () {
      return `<p style="color:${theme.chartTooltipText}">${this.y} new followers</p>`;
    },
    positioner: function (a, b, point) {
      if (point.plotX - 70 > this.chart.plotLeft) {
        return {x: point.plotX - 15, y: point.plotY + b * 3};
      } else {
        return {x: point.plotX + 100, y: point.plotY + 25};
      }
    },
  },
  plotOptions: {
    xAxis: {
      max: 13,
      min: 4,
    },
    yAxis: {
      max: 12,
      min: 0,
    },
    series: {
      pointStart: 4,
      allowPointSelect: true,
      lineWidth: 1,
      color: theme.chartLines,
      states: {
        hover: {
          enabled: false,
        },
      },
      marker: {
        fillColor: theme.chartMarkerFill,
        lineWidth: 2,
        lineColor: null,
        radius: 5,
        states: {
          select: {
            fillColor: theme.chartLines,
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
      data: [3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
    },
  ],
});

export default HighChartsOptions;
