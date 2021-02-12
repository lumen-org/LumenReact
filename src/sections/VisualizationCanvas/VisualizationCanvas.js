import React, { Component } from "react";
import RnDPlot from "../../components/RnDPlotWrapper";
import PropTypes from "prop-types";
import PCIGraph from "../../components/PCIGraph";
import "./VisualizationCanvas.scss";
import { MULTI_PLOT, PCI_PLOT, STANDARD_PLOT } from "../../constants/plotTypes";
import StandardPlot from "../../components/StandardPlot/StandardPlotContainer";
import MultiPlot from "../../components/MultiPlot/MultiPlotContainer";
import { STANDARD_SPECIFICATION } from "../../states/specifications/specificationTypes";


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

  state = {
    plotWindowsWidth: 500,
    plotWindowsHeight: 500
  }

  render() {
    const { plots, specifications, standardspecifications, models } = this.props;
    const {
      plotWindowsHeight,
      plotWindowsWidth
    } = this.state;
    return (
      <div className="VisualizationCanvas-container">
        {Object.keys(plots).map(
          (id) => {
            const {plotType, specificationId} = plots[id];
            const specificationType = specifications[specificationId].specificationType
            
            return plots[id].show && (
              <RnDPlot
                id={plots[id].id}
                zIndex={plots[id].zIndex + 10}
                modelName={plots[id].model}
                specifications={
                  standardspecifications[specificationId]
                }
                visualizationId={plots[id].visualizationId}
              >
                {plotType === STANDARD_PLOT ? (
                  <StandardPlot id={id} />
                ) : plotType === MULTI_PLOT ? (
                  <MultiPlot id={id} />
                ) : plotType === PCI_PLOT ? (
                  <PCIGraph id={id}
                  // plotWindowsHeight={plotWindowsHeight}
                  // plotWindowsWidth={plotWindowsWidth}
                  />
                ) : null}
              </RnDPlot>
            )
          }
        )}
      </div>
    );
  }
}

export default VisualizationCanvas;
