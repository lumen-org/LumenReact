import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlotMenu from "./PlotMenu";
import { createNewPlot } from "../../states/plots/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import {
  changeActiveVisualization,
  createNewVisualization,
  fillVisualization,
} from "../../states/visualizations/actions";
import { STANDARD_PLOT, MULTI_PLOT, PCI_PLOT } from "../../constants/plotTypes";
class PlotMenuContainer extends React.Component {
  static propTypes = {
    specificationId: PropTypes.number,
    plotId: PropTypes.number,
    modelId: PropTypes.number,
    lastCreatedVisualizationId: PropTypes.number,
    createNewVisualization: PropTypes.func.isRequired,
  };

  onCreateStandardPlot = () => {
    this.createNewPlot(STANDARD_PLOT);
  };
  onCreateMultiPlot = () => {
    this.createNewPlot(MULTI_PLOT);
  };
  onCreatePCIPlot = () => {
    this.createNewPlot(PCI_PLOT)
  }

  createNewPlot = (plotType) => {
    const {
      changeActiveVisualization,
      createPlot,
      addSpecifications,
      createNewVisualization,
      fillVisualization,
    } = this.props;

    createNewVisualization().then(() => {
      addSpecifications().then(() => {
        createPlot(
          "...", // supposed to be modelId, probably not useful here.
          this.props.lastCreatedVisualizationId,
          this.props.specificationId,
          plotType
        );
        fillVisualization(
          this.props.lastCreatedVisualizationId,
          this.props.modelId,
          this.props.specificationId,
          this.props.plotId
        );
        changeActiveVisualization(this.props.lastCreatedVisualizationId);
      });
    });
  };
  render() {
    return (
      <PlotMenu
        onCreateMultiPlot={this.onCreateMultiPlot}
        onCreateStandardPlot={this.onCreateStandardPlot}
        onCreatePCIPlot={this.onCreatePCIPlot}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    specificationId: state.specifications.lastCreatedId,
    plotId: state.plots.lastCreatedId,
    modelId: state.models.lastCreatedModelId,
    lastCreatedVisualizationId: state.visualizations.lastCreatedVisualizationId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewVisualization: (modelName, schemaId, specificationId, plotId) =>
      dispatch(
        createNewVisualization(modelName, schemaId, specificationId, plotId)
      ),
    changeActiveVisualization: (id) => dispatch(changeActiveVisualization(id)),
    createPlot: (activeModel, visualizationId, specificationId, plotType) =>
      dispatch(
        createNewPlot(activeModel, visualizationId, specificationId, plotType)
      ),
    addSpecifications: () => {
      return dispatch(createNewSpecification());
    },
    fillVisualization: (visualizationId, modelId, specificationId, plotId) =>
      dispatch(
        fillVisualization(visualizationId, modelId, specificationId, plotId)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotMenuContainer);
