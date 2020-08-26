import React, { Component } from "react";
import { connect } from "react-redux";
import RnDPlot from "../../components/RnDPlotWrapper";
import PropTypes from "prop-types";
import PCIGraph from "../../components/PCIGraph";
import "./VisualizationCanvas.scss";
import { MULTI_PLOT, PCI_PLOT, STANDARD_PLOT } from "../../constants/plotTypes";
import StandardPlot from "../../components/StandardPlot/StandardPlotContainer";
import MultiPlot from "../../components/MultiPlot/MultiPlotContainer";

class VisualizationCanvas extends Component {
  static propTypes = {
    plots: PropTypes.arrayOf(
      PropTypes.objectOf({
        id: PropTypes.number,
        modelName: PropTypes.string,
        plotData: PropTypes.array,
        layout: PropTypes.object,
        specifications: PropTypes.object,
      })
    ),
  };

  render() {
    const { plots, specifications, models } = this.props;
    return (
      <div className="VisualizationCanvas-container">
        {Object.keys(plots).map(
          (id) =>
            plots[id].show && (
              <RnDPlot
                id={plots[id].id}
                zIndex={plots[id].zIndex + 10}
                modelName={plots[id].model}
                specifications={
                  specifications.byId[plots[id].specificationId].specification
                }
                visualizationId={plots[id].visualizationId}
                plotType={plots[id].plotType}
              >
              </RnDPlot>
            )
        )}
      </div>
    );
  }
}

export default VisualizationCanvas;
