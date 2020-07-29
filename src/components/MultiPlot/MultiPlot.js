import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MultiPlot.css";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

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
