import { plotStyle } from "./plotStyle";

export const defaultPlot = {
  layout: {
    autosize: true,
    showlegend: false,
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
    },
    xaxis: "x2",
    type: "scatter",
    histnorm: "probability density",
  },
  xHistogramTrace: {
    marker: {
      color: "rgb(207, 207, 207)",
      opacity: 0.75,
      line: {
        color: "rgb(97, 97, 97)",
        width: 1.5,
      },
    },
    yaxis: "y2",
    type: "scatter",
  },
  modelYHistogramTrace: {
    marker: {
      color: "rgba(231, 99, 250, 0.5)",
      opacity: 0.75,
      line: {
        color: "rgb(235, 64, 52)",
        width: 1,
      },
    },
    xaxis: "x2",
    type: "scatter",
  },
  modelXHistogramTrace: {
    marker: {
      color: "rgba(231, 99, 250, 0.5)",
      opacity: 0.75,
      line: {
        color: "rgb(235, 64, 52)",
        width: 1,
      },
    },
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
  showlegend: false,
};
