import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MultiPlot.css";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

var specification: {
    X_Axis: [],
    Y_Axis: [],
    Filter: [],
    Detail: [],
    Color: [],
    Shape: [],
    Size: [],
  },
  facets: {
    0: {
      model: false,
      data: false,
    },
    1: {
      model: false,
      data: true,
    },
    2: {
      model: false,
      data: true,
    },
    3: {
      model: false,
      data: false,
    },
  };

function generate100RandomData() {
  var x = [];

  for (var i = 0; i < 100; i++) {
    x.push(Math.random());
  }
  return x;
}

const xval = generate100RandomData();
const yval = generate100RandomData();

var scatterTrace = {
  x: xval,
  y: yval,
  type: "scatter",
  mode: "markers",
  xaxis: "x",
  yaxis: "y",
  marker: {
    color: "rgba(17, 157, 255,0.5)",
    size: 5,
    line: {
      color: "rgb(231, 99, 250)",
      width: 1,
    },
  }, // TODO: CUSTOMIZED MARKERS COLOR SCHEME
};

var histogramDataXTrace = {
  x: xval,
  name: "data density",
  marker: {
    color: "rgb(207, 207, 207)",
    opacity: 0.75,
    line: {
      color: "rgb(97, 97, 97)",
      width: 1.5,
    },
  },
  yaxis: "y2",
  type: "histogram",
};

var histogramDataYTrace = {
  y: yval,
  name: "data density",
  marker: {
    color: "rgb(207,207,207)",
    opacity: 0.75,
    line: {
      color: "rgb(97,97,97)",
      width: 1.5,
    },
    xbins: {
      size: 0.06,
    },
  },
  xaxis: "x2",
  type: "histogram",
};
var data = [scatterTrace, histogramDataXTrace, histogramDataYTrace];

var layout = {
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
};
class MultiPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    layout: PropTypes.object,
  };

  state = {};
  render() {
    //const { plotData, layout } = this.props;

    return (
      <Plot
        data={data}
        layout={layout}
        useResizeHandler={true}
        className="MultiPlot-plot"
      />
    );
  }
}

export default MultiPlot;
