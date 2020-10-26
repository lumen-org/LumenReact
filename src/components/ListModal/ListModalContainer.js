import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
import { ListModal } from "./ListModal";
import { showModel, showHeaders } from "../../utils/pqlModelQueries";
import { STANDARD_PLOT } from "../../constants/plotTypes";
import {
  changeActiveVisualization,
  createNewVisualization,
  fillVisualization,
} from "../../states/visualizations/actions";
import { createNewModel } from "../../states/models/actions";
const defaultPlotType = STANDARD_PLOT; // Haha, we will certainly refractor this, right?
class ListModalContainer extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    specificationId: PropTypes.number,
    plotId: PropTypes.number,
    modelId: PropTypes.number,
    lastCreatedVisualizationId: PropTypes.number,
  };

  state = {
    models: [],
    status: "ok",
  };

  handleItemSelection = (modelName) => {
    const {
      changeActiveVisualization,
      handleModalClose,
      createPlot,
      addSpecifications,
      createNewVisualization,
      createNewModel,
      fillVisualization,
    } = this.props;
    // even though the dispatches officially are executed sequential the mapStateToProps
    // is not updating in time, that's why we need to ensure the order by
    // making addSpecification a promise
    // Im not sure if I did it correctly
    createNewVisualization(modelName).then(() => {
      addSpecifications().then(() => {
        // move into schema redux store to avoid this nested promises
        showHeaders(modelName)
          .then((fields) => {
            createNewModel(modelName, fields);
          })
          .then(() => {
            createPlot(
              modelName,
              this.props.lastCreatedVisualizationId,
              this.props.specificationId
            );
            fillVisualization(
              this.props.lastCreatedVisualizationId,
              this.props.modelId,
              this.props.specificationId,
              this.props.plotId
            );
            changeActiveVisualization(this.props.lastCreatedVisualizationId);
            //... TODO: TO COMPLETE THE CONDITION
            handleModalClose();
          });
      });
    });
  };

  componentWillMount() {
    showModel().then((models) => {
      this.setState({ models });
    });
  }

  render() {
    const { open, handleModalClose } = this.props;
    const { models } = this.state;

    return (
      <ListModal
        open={open}
        itemList={models}
        handleModalClose={handleModalClose}
        handleItemSelection={this.handleItemSelection}
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
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),
    changeActiveVisualization: (id) => dispatch(changeActiveVisualization(id)),
    createPlot: (activeModel, visualizationId, specificationId) =>
      dispatch(
        createNewPlot(
          activeModel,
          visualizationId,
          specificationId,
          defaultPlotType
        )
      ),
    addSpecifications: () => {
      return dispatch(createNewSpecification());
    },
    createNewModel: (modelName, model) =>
      dispatch(createNewModel(modelName, model)),
    fillVisualization: (visualizationId, modelId, specificationId, plotId) =>
      dispatch(
        fillVisualization(visualizationId, modelId, specificationId, plotId)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalContainer);
