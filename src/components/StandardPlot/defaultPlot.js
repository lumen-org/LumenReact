import { plotStyle } from "./plotStyle";

export const defaultPlot = {
  layout: {
    autosize: true,
    xaxis: {
      domain: [0, 0.85],
    },
    yaxis: {
      domain: [0, 0.85],
    },
    xaxis2: {
      domain: [0.85, 1],
    },
    yaxis2: {
      domain: [0.85, 1],
    },
  },
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
  modelYHistogramTrace: {
    marker: {
      color: "rgb(235, 64, 52)",
      opacity: 0.75,
      line: {
        color: "rgb(235, 64, 52)",
        width: 1.5,
      },
      xbins: {
        size: 0.08,
      },
    },
    xaxis: "x2",
    type: "histogram",
  },
  modelXHistogramTrace: {
    marker: {
      color: "rgb(2235, 64, 52)",
      opacity: 0.75,
      line: {
        color: "rgb(235, 64, 52)",
        width: 1.5,
      },
      xbins: {
        size: 0.08,
      },
    },
    yaxis: "y2",
    type: "histogram",
  },
  densityTrace: {
    name: "training data density",
    ncontours: 20,
    colorscale: "Blues",
    reversescale: true,
    showscale: false,
    type: "histogram2dcontour",
  },
  modelDensityTrace: {
    name: "model density",
    ncontours: 20,
    colorscale: "Reds",
    reversescale: true,
    showscale: false,
    type: "histogram2dcontour",
  },
  modelScatterTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    marker: plotStyle.modelScatterMarker,
  },
};
