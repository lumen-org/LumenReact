import { markers } from "./markers";
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
    marker: markers.modelPredictionMarker,
  },
  dataPredictionTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    showlegend: false,
    marker: markers.dataPredictionMarker,
  },
  scatterTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    showlegend: true,
    marker: markers.scatterMarker,
  },
  modelScatterTrace: {
    type: "scatter",
    mode: "markers",
    xaxis: "x",
    yaxis: "y",
    marker: markers.modelScatterMarker,
    showlegend: true,
  },
  yHistogramTrace: {
    marker: markers.histogramMarker,
    xaxis: "x2",
    type: "scatter",
    fill: "tozeroy",
    showlegend: false,
  },
  xHistogramTrace: {
    marker: markers.histogramMarker,
    yaxis: "y2",
    fill: "tozeroy",
    type: "scatter",
    showlegend: false,
  },
  modelYHistogramTrace: {
    marker: markers.modelHistogramMarker,
    fill: "tozeroy",
    xaxis: "x2",
    type: "scatter",
    showlegend: false,
  },
  modelXHistogramTrace: {
    marker: markers.modelHistogramMarker,
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
