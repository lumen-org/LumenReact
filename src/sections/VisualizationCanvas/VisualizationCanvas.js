import React, { Component } from "react";
import PropTypes from "prop-types";
import "./VisualizationCanvas.css";

class VisualizationCanvas extends Component {
  static propTypes = {
    modelName: PropTypes.string
  };
  render() {
    const { modelName } = this.props;
    return <div className="VisualizationCanvas-container">{modelName}</div>;
  }
}

export default VisualizationCanvas;
