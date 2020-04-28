import React, { Component } from "react";
import { Rnd } from "react-rnd";

import PropTypes from "prop-types";
import "./VisualizationCanvas.css";

class VisualizationCanvas extends Component {
  static propTypes = {
    modelName: PropTypes.string,
  };

  state = {
    width: 100,
    height: 100,
    x: 100,
    y: 100,
  };

  render() {
    const { modelName } = this.props;
    return (
      <div className="VisualizationCanvas-container">
        <Rnd
          size={{ width: this.state.width, height: this.state.height }}
          position={{ x: this.state.x, y: this.state.y }}
          onDragStop={(e, d) => {
            this.setState({ x: d.x, y: d.y });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.style.width,
              height: ref.style.height,
              ...position,
            });
          }}
          style={{
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          {modelName}
        </Rnd>
      </div>
    );
  }
}

export default VisualizationCanvas;
