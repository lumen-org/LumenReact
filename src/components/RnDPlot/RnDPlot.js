import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rnd } from "react-rnd";
import CloseButton from "../Button/CloseButton";
import "./RnDPlot.css";
// We need to import Plotly in this strange way due to heap memory
// See issue: https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

class RnDPlot extends Component {
  static propTypes = {
    modelName: PropTypes.string,
  };

  state = {
    plotWindowsWidth: 500,
    plotWindowsHeight: 500,
    plotWindowsPosX: 100,
    plotWindowsPosY: 100,
    plotData: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "red" },
      },
      { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
    ],
    figure: {},
  };

  onDragStop = (event, dragIndex) => {
    this.setState({
      plotWindowsPosX: dragIndex.x,
      plotWindowsPosY: dragIndex.y,
    });
  };

  onResizeStop = (event, direction, ref, delta, position) => {
    this.setState({
      plotWindowsWidth: ref.style.width,
      plotWindowsHeight: ref.style.height,
      ...position,
    });
  };

  handleClosePlot = () => {
    // remove the plot information from the queue here.
  };

  render() {
    const { modelName } = this.props;

    const {
      plotWindowsHeight,
      plotWindowsWidth,
      plotWindowsPosX,
      plotWindowsPosY,
      plotData,
    } = this.state;

    return (
      <Rnd
        size={{ width: plotWindowsWidth, height: plotWindowsHeight }}
        position={{ x: plotWindowsPosX, y: plotWindowsPosY }}
        onDragStop={this.onDragStop}
        onResizeStop={this.onResizeStop}
        className="VisualizationCanvas-plot-container"
      >
        <div className="VisualizationCanvas-plot-titlebar">
          <CloseButton handleClose={this.handleClose} />
        </div>

        <Plot
          data={plotData}
          layout={{
            autosize: true,
            title: modelName,
          }}
          useResizeHandler={true}
          className="VisualizationCanvas-plot"
        />
      </Rnd>
    );
  }
}

export default RnDPlot;
