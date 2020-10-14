import React, { Component } from "react";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData, { fetchModelData } from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";
import { STANDARD_PLOT } from "../../constants/plotTypes";
import {
  changeActiveVisualization,
  createNewVisualization,
  fillVisualization,
} from "../../states/visualizations/actions";
import { createNewModel, updateModelDimensions } from "../../states/models/actions";
import { addAllDimensions, getAllDimensionIds } from "../../states/dimensions/actions";
import { getDimensionsByModelId } from "../../states/dimensions/selector";
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
  };

  handleItemSelection = (item) => {
    const {
      changeActiveVisualization,
      handleModalClose,
      createPlot,
      addSpecifications,
      createNewVisualization,
      createNewModel,
      updateModelDimensions,
      addAllDimensions,
      getAllDimensionIds,
      fillVisualization,
    } = this.props;
    // even though the dispatches officially are executed sequential the mapStateToProps
    // is not updating in time, that's why we need to ensure the order by
    // making addSpecification a promise
    // Im not sure if I did it correctly
    createNewVisualization(item).then(() => {
      addSpecifications().then(() => {
        // move into schema redux store to avoid this nested promises
        fetchModelData(item)
          .then((response) => {
            createNewModel(item, response["Fields"]);
            return JSON.parse(JSON.stringify(response["Fields"]));
          })
          .then((value) => {
            const modelId = this.props.modelId;
            addAllDimensions(this.props.modelId, item, value);
            updateModelDimensions(this.props.modelId, this.props.getDimensionsByModelId);
            
            //console.log("getDimensionsByModelId", getDimensionsByModelId);
          })
          .then(() => {
            createPlot(
              item,
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
    fetchData(BASE_URL, FETCH_ALL_MODEL_NAME).then((response) =>
      this.setState({ models: response["models"] })
    );
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
    getDimensionsByModelId: getDimensionsByModelId(state),
    dimensions: state.dimensions,
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
    addAllDimensions: (modelId, modelName, dimensionName) => {
      dispatch(addAllDimensions(modelId, modelName, dimensionName))},
    updateModelDimensions: (modelId, dimensions) => {
      dispatch(updateModelDimensions(modelId, dimensions))
    },
    getAllDimensionIds: () => {
      return dispatch(getAllDimensionIds())
    },
    createNewModel: (modelId, modelName, model) =>
      dispatch(createNewModel(modelId, modelName, model)),
    fillVisualization: (visualizationId, modelId, specificationId, plotId) =>
      dispatch(
        fillVisualization(visualizationId, modelId, specificationId, plotId)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalContainer);
