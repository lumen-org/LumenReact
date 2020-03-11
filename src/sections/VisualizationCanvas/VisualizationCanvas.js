import React, { Component } from "react";
import PropTypes from "prop-types";
import "./VisualizationCanvas.css";

class VisualizationCanvas extends Component {
  static propTypes = {
    modelName: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="VisualizationCanvas-container">
        {this.props.modelName}
      </div>
    );
  }
}

export default VisualizationCanvas;
