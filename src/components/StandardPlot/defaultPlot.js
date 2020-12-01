import { plotStyle } from "./plotStyle";
// TODO: Implement colorscheme
export const defaultPlot = {
  layout: {
    colorway: [
      "rgba(231, 99, 250)",
      "rgba(231,164,18)",
      "rgba(10, 100,250)",
      "#6f4d96",
      "#3d3b72",
      "#182844",
    ],
    autosize: true,
    showlegend: false,
    xaxis: {
      domain: [0, 0.85],
      showgrid: false,
    },
    yaxis: {
      domain: [0, 0.85],
      showgrid: false,
    },
    xaxis2: {
      domain: [0.85, 1],
      showgrid: false,
    },
    yaxis2: {
      domain: [0.85, 1],
      showgrid: false,
    },
  },
  modelPredictionTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    marker: plotStyle.modelPredictionMarker,
  },
  dataPredictionTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    marker: plotStyle.dataPredictionMarker,
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
      opacity: 0.7,
      line: {
        color: "rgb(33, 33, 33)",
        width: 4.5,
      },
    },
    xaxis: "x2",
    type: "scatter",
    fill: "tozeroy",
  },
  xHistogramTrace: {
    marker: {
      color: "rgb(207, 207, 207)",
      opacity: 0.7,
      line: {
        color: "rgb(33, 33, 33)",
        width: 4.5,
      },
    },
    yaxis: "y2",
    fill: "tozeroy",
    type: "scatter",
  },
  modelYHistogramTrace: {
    marker: {
      color: "rgba(231, 99, 250, 0.5)",
      opacity: 0.5,
      line: {
        color: "rgb(235, 64, 52)",
        width: 4.5,
      },
    },
    fill: "tozeroy",
    xaxis: "x2",
    type: "scatter",
  },
  modelXHistogramTrace: {
    marker: {
      color: "rgba(231, 99, 250, 0.5)",
      opacity: 0.5,
      line: {
        color: "rgb(235, 64, 52)",
        width: 4.5,
      },
    },
    fill: "tozeroy",
    yaxis: "y2",
    type: "scatter",
  },
  dataDensityTrace: {
    name: "model density",
    showscale: false,
    type: "contour",
    colorscale: "Greys",
    contours: {
      coloring: "lines",
      color: "#666666",
      width: 4,
    },
    xaxis: "x",
    yaxis: "y",
  },
  modelDensityTrace: {
    name: "model density",
    showscale: false,
    type: "contour",
    colorscale: "YlOrRd",
    contours: {
      coloring: "lines",
      color: "pink",
      width: 4,
    },
    xaxis: "x",
    yaxis: "y",
  },
  modelScatterTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    marker: plotStyle.modelScatterMarker,
  },
};
