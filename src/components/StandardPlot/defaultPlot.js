import { plotStyle } from "./plotStyle";
export const defaultPlot = {
  layout: {
    autosize: true,
    xaxis: {
      domain: [0, 0.85],
      showgrid: false,
      title: {
        text: "x Axis",
        /*
        font: {
          family: "Courier New, monospace",
          size: 18,
          color: "#7f7f7f",
        },
        */
      },
    },
    yaxis: {
      domain: [0, 0.85],
      showgrid: false,
      title: {
        text: "x Axis",
      },
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
    showlegend: false,
    marker: plotStyle.modelPredictionMarker,
  },
  dataPredictionTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    showlegend: false,
    marker: plotStyle.dataPredictionMarker,
  },
  scatterTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    showlegend: true,
    marker: plotStyle.scatterMarker,
  },
  modelScatterTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    marker: plotStyle.modelScatterMarker,
    showlegend: true,
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
    showlegend: false,
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
    showlegend: false,
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
    showlegend: false,
  },
  modelXHistogramTrace: {
    marker: {
      color: "rgba(231, 99, 250,0.5)",
      opacity: 0.5,
      line: {
        color: "rgb(235, 64, 52)",
        width: 4.5,
      },
    },
    fill: "tozeroy",
    yaxis: "y2",
    type: "scatter",
    showlegend: false,
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
    showlegend: false,
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
    showlegend: false,
  },
};
