import React, { Component } from "react";
import RnDPlot from "../../components/RnDPlot";
import PropTypes from "prop-types";
import "./VisualizationCanvas.css";

class VisualizationCanvas extends Component {
  static propTypes = {
    modelName: PropTypes.string,
  };

  render() {
    const { modelName } = this.props;

    return (
      <div className="VisualizationCanvas-container">
        <RnDPlot modelName={modelName} />
      </div>
    );
  }
}

export default VisualizationCanvas;
