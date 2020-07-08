import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StandardPlot.css";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

var specification_example: {
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
var data2 = [scatterTrace, histogramDataXTrace, histogramDataYTrace];

var layout2 = {
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
class StandardPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    // TODO: refractor the fetch function so that we don't need specification here
    specification: PropTypes.object,
    facets: PropTypes.object,
  };

  state = {
    layout: {
      autosize: true,
    },
    scatterTrace: {
      x: [],
      y: [],
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
      },
    },

    histogramDataYTrace: {
      y: [],
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
    },

    histogramDataXTrace: {
      x: [],
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
    },
    data: [],
  };

  componentDidMount() {
    const { specification, facets, plotData } = this.props;
    console.log("specification", specification);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.specification !== this.props.specification ||
      prevProps.facets !== this.props.facets
    ) {
      // SET STATE...
    }
  }

  render() {
    const { layout, data } = this.state;

    return (
      <Plot
        data={data2}
        layout={layout2}
        useResizeHandler={true}
        className="StandardPlot-plot"
      />
    );
  }
}

export default StandardPlot;
