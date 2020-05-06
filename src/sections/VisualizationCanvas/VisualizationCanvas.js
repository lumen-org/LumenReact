import React, { Component } from "react";
import RnDPlot from "../../components/RnDPlot";
import PropTypes from "prop-types";
import "./VisualizationCanvas.css";
import DependencyGraphComponent from "../DependendyGraph";

class VisualizationCanvas extends Component {
  static propTypes = {
    plots: PropTypes.arrayOf(
      PropTypes.objectOf({
        id: PropTypes.number,
        modelName: PropTypes.string,
        specifications: PropTypes.object,
        plotData: PropTypes.array,
        layout: PropTypes.object,
      })
    ),
  };

  render() {
    const { plots } = this.props;
    return (
      <div className="VisualizationCanvas-container">
        {plots.map(
          (plot) =>
            plot.show && (
              <RnDPlot
                id={plot.id}
                zIndex={plot.zIndex}
                modelName={plot.model}
                specifications={plot.specifications}
              />
            )
        )}
        <DependencyGraphComponent />
      </div>

    );
  }
}

export default VisualizationCanvas;
