import { plotStyle } from "./plotStyle";

export const defaultPlotTraces = {
  scatterTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    marker: plotStyle.scatterMarker,
  },
  yHistogramTrace: {
    marker: {
      color: "rgb(207,207,207)",
      opacity: 0.75,
      line: {
        color: "rgb(97,97,97)",
        width: 1.5,
      },
      xbins: {
        size: 0.08,
      },
    },
    xaxis: "x2",
    type: "histogram",
  },
  xHistogramTrace: {
    marker: {
      color: "rgb(207, 207, 207)",
      opacity: 0.75,
      line: {
        color: "rgb(97, 97, 97)",
        width: 1.5,
      },
      xbins: {
        size: 0.08,
      },
    },
    yaxis: "y2",
    type: "histogram",
  },
};
