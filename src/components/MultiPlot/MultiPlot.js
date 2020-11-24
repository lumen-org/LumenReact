import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MultiPlot.css";
import Plot from "react-plotly.js";

class MultiPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    layout: PropTypes.object,
  };

  state = {};
  render() {
    const { plotData, layout } = this.props;

    return (
      <Plot
        data={plotData}
        layout={layout}
        useResizeHandler={true}
        className="MultiPlot-plot"
      />
    );
  }
}

export default MultiPlot;
