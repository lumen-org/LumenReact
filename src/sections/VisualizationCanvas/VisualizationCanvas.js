import React, { Component } from "react";
import { Rnd } from "react-rnd";
import CloseButton from "../../components/Button/CloseButton";
import PropTypes from "prop-types";
import "./VisualizationCanvas.css";

class VisualizationCanvas extends Component {
  static propTypes = {
    modelName: PropTypes.string,
  };

  state = {
    plotWindowsWidth: 500,
    plotWindowsHeight: 500,
    plotWindowsPosX: 100,
    plotWindowsPosY: 100,
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
    } = this.state;

    return (
      <div className="VisualizationCanvas-container">
        <Rnd
          size={{ width: plotWindowsWidth, height: plotWindowsHeight }}
          position={{ x: plotWindowsPosX, y: plotWindowsPosY }}
          onDragStop={this.onDragStop}
          onResizeStop={this.onResizeStop}
          className="VisualizationCanvas-plot"
        >
          <div className="VisualizationCanvas-plot-titlebar">
            <CloseButton handleClose={this.handleClose} />
            {modelName}
          </div>
        </Rnd>
      </div>
    );
  }
}

export default VisualizationCanvas;
