import React, { Component } from "react";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData, { fetchModelData } from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";
import { changeActiveVisualization, createNewVisualization, fillVisualization } from "../../states/visualizations/actions";
import { createNewModel } from "../../states/models/actions";
import visualizations from "../../states/visualizations/reducer";
import { generateId } from "../../utils/idGenerator";

class ListModalContainer extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired
  };

  state = {
    models: [],
    currentModel: null
  };

  getModelData = async (item) => {
    const {
      changeActiveVisualization,
      handleModalClose,
      createPlot,
      addSpecifications,
      createNewVisualization,
      createNewModel,
      fillVisualization,
      lastCreatedVisualizationId,
      specificationId,
      modelId
    } = this.props;
    createNewVisualization(item).then(() => {
      addSpecifications().then(() => {
        // move into schema redux store to avoid this nested promises
        fetchModelData(item).then((response) => {
          createNewModel(item.modelName, response["Fields"]);
        }
        ).then(() => {
          createPlot(item, this.props.lastCreatedVisualizationId, this.props.specificationId);
          fillVisualization(this.props.lastCreatedVisualizationId, this.props.modelId, this.props.specificationId, this.props.plotId);
          changeActiveVisualization(this.props.lastCreatedVisualizationId);
          handleModalClose();
        });
      });
    });
  }

  handleItemSelection = async (item) => {
    const {
      changeActiveVisualization,
      handleModalClose,
      createPlot,
      createNewSpecification,
      createNewVisualization,
      createNewModel
    } = this.props;
    const model = await fetchModelData(item);
    const { Fields, id } = model;
    // todo: check if model exists and handle appropriatly
    const specId = generateId();
    const plotId = generateId();
    const visId = generateId();
    createNewVisualization(visId, id, specId, plotId)
    createNewSpecification(specId)
    createNewModel(item, Fields)
    createPlot(item, visId, specId)
    changeActiveVisualization(visId)
    handleModalClose();
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
    specificationId: state.specifications.lastCreatedId,
    plotId: state.plots.lastCreatedId,
    modelId: state.models.lastCreatedModelId,
    lastCreatedVisualizationId: state.visualizations.lastCreatedVisualizationId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewVisualization: (id, modelId, specificationId, plotId) =>
      dispatch(createNewVisualization(id, modelId, specificationId, plotId)),
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),
    changeActiveVisualization: (id) => dispatch(changeActiveVisualization(id)),
    createPlot: (activeModel, visualizationId, specificationId) =>
      dispatch(createNewPlot(activeModel, visualizationId, specificationId)),
    // resetSpecifications: () => dispatch(resetSpecifications()),
    createNewSpecification: (specId) => {
      return dispatch(createNewSpecification(specId));
    },
    createNewModel: (modelName, model) => dispatch(createNewModel(modelName, model)),
    fillVisualization: (visualizationId, modelId, specificationId, plotId) =>
      dispatch(fillVisualization(visualizationId, modelId, specificationId, plotId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalContainer);
