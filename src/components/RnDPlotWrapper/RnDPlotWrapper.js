import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rnd } from "react-rnd";
import CloseButton from "../Button/CloseButton";
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
    plotType: PropTypes.string,
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

  onDragStart = (event) => {
    const { id, onActivePlotChange, activePlotId } = this.props;
    if (id !== activePlotId) {
      onActivePlotChange(id);
    }
  }

  onDragStop = (event, dragIndex) => {
    this.setNewPos(dragIndex);
  };

  onResizeStop = (event, direction, ref, delta, position) => {
    console.log(ref.style.width)
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
    const { zIndex } = this.props;
    const {
      plotWindowsWidth,
      plotWindowsHeight,
      plotWindowsPosX,
      plotWindowsPosY,
    } = this.state;
    const children = React.cloneElement(this.props.children, {
      ...this.props.children.props,
      plotWindowsWidth: plotWindowsWidth,
      plotWindowsHeight: plotWindowsHeight
    })

    return (
      <Rnd
        size={{ width: plotWindowsWidth, height: plotWindowsHeight }}
        position={{ x: plotWindowsPosX, y: plotWindowsPosY }}
        cancel=".cancel"
        style={{ zIndex: zIndex }}
        onDragStop={this.onDragStop}
        onDragStart={this.onDragStart}
        onResizeStop={this.onResizeStop}
        className="RndPlot-container"
      >
        <div className="RndPlot-titlebar">
          <CloseButton handleClose={this.handleClose} />
        </div>
        <div className="cancel">
          {children}
        </div>
      </Rnd>
    );
  }
}

export default RnDPlotWrapper;
