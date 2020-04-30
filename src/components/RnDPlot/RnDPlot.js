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
    plotData: PropTypes.array,
    layout: PropTypes.object,
  };

  state = {
    plotWindowsWidth: 500,
    plotWindowsHeight: 500,
    plotWindowsPosX: 50,
    plotWindowsPosY: 50,
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
    const { modelName, plotData, layout } = this.props;
    console.log(plotData);
    const {
      plotWindowsHeight,
      plotWindowsWidth,
      plotWindowsPosX,
      plotWindowsPosY,
    } = this.state;
    return (
      <Rnd
        size={{ width: plotWindowsWidth, height: plotWindowsHeight }}
        position={{ x: plotWindowsPosX, y: plotWindowsPosY }}
        onDragStop={this.onDragStop}
        onResizeStop={this.onResizeStop}
        className="RndPlot-container"
      >
        <div className="RndPlot-titlebar">
          <CloseButton handleClose={this.handleClose} />
        </div>
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
      </Rnd>
    );
  }
}

export default RnDPlot;
