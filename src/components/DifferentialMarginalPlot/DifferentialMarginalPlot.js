import React, { Component } from "react";
import PropTypes from "prop-types";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

class DifferentialMarginalPlot extends Component {
  static propTypes = {
    plotData: PropTypes.array,
    layout: PropTypes.object,
    modelName: PropTypes.string,
  };

  state = {};
  render() {
    const { plotData, layout, modelName } = this.props;
    return (
      <Plot
        data={plotData}
        layout={{
          autosize: true,
          title: modelName,
          grid: {
            rows: layout.row,
            columns: layout.column,
            pattern: "independent",
          },
        }}
        useResizeHandler={true}
        className="RndPlot-plot"
      />
    );
  }
}

export default DifferentialMarginalPlot;
