import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rnd } from "react-rnd";
import CloseButton from "../Button/CloseButton";
import MultiPlot from "../MultiPlot";
import StandardPlot from "../StandardPlot";

import "./RnDPlotWrapper.scss";

/**
 * RnDPlotWrapper is a wrapper around different kinds of plots such as:
 * Differential Marginal Plot, Graph View of Model, Individual Conditionally Expectation Plot
 */

class RnDPlotWrapper extends Component {
  static propTypes = {
    id: PropTypes.number,
    onActivePlotChange: PropTypes.func,
    onPlotClose: PropTypes.func,
    activePlotId: PropTypes.number,
    zIndex: PropTypes.number,
    component: PropTypes.object,
  };

  state = {
    plotWindowsWidth: 500,
    plotWindowsHeight: 500,
    plotWindowsPosX: 50,
    plotWindowsPosY: 50,
  };

  setNewPos = (dragIndex) => {
    this.setState({
      plotWindowsPosX: dragIndex.x,
      plotWindowsPosY: dragIndex.y,
    });
  };

  onDragStop = (event, dragIndex) => {
    const { id, onActivePlotChange, activePlotId } = this.props;
    if (id !== activePlotId) {
      onActivePlotChange(id);
    }
    this.setNewPos(dragIndex);
  };

  onResizeStop = (event, direction, ref, delta, position) => {
    this.setState({
      plotWindowsWidth: ref.style.width,
      plotWindowsHeight: ref.style.height,
      ...position,
    });
  };

  handleClose = () => {
    const { onPlotClose, id } = this.props;
    onPlotClose(id);
  };

  render() {
    const { zIndex, id } = this.props;
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
        style={{ zIndex: zIndex }}
        onDragStop={this.onDragStop}
        onResizeStop={this.onResizeStop}
        className="RndPlot-container"
      >
        <div className="RndPlot-titlebar">
          <CloseButton handleClose={this.handleClose} />
        </div>
        {this.props.component.render()}
      </Rnd>
    );
  }
}

export default RnDPlotWrapper;
