import React, { Component } from "react";
import { connect } from "react-redux";
import RnDPlot from "../../components/RnDPlotWrapper";
import PropTypes from "prop-types";
import "./VisualizationCanvas.css";
import DependencyGraphComponent from "../DependendyGraph";

class VisualizationCanvas extends Component {
  static propTypes = {
    plots: PropTypes.arrayOf(
      PropTypes.objectOf({
        id: PropTypes.number,
        modelName: PropTypes.string,
        // specifications: PropTypes.object,
        plotData: PropTypes.array,
        layout: PropTypes.object,
        specifications: PropTypes.object
      })
    ),
  };

  render() {
    const { plots, specifications } = this.props;
    return (
      <div className="VisualizationCanvas-container">
        {Object.keys(plots).map(
          (id) =>
            plots[id].show && (
              <RnDPlot
                id={plots[id].id}
                zIndex={plots[id].zIndex}
                modelName={plots[id].model}
                specifications={specifications.byId[plots[id].specificationId].specification}
                visualizationId={plots[id].visualizationId}
              />
            )
        )}
        <DependencyGraphComponent pciDisplayed={this.props.pciDisplayed}/>
      </div>

    );
  }
}

export default VisualizationCanvas;
