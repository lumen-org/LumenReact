import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData, { fetchModelData } from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";
import { changeActiveVisualization, createNewVisualization } from "../../states/visualizations/actions";
import { createNewModel } from "../../states/models/actions";
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
    createNewModel(item, Fields, id)
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
    changeActiveVisualization: (id) => dispatch(changeActiveVisualization(id)),
    createPlot: (activeModel, visualizationId, specificationId) =>
      dispatch(createNewPlot(activeModel, visualizationId, specificationId)),
    createNewSpecification: (specId) => {
      return dispatch(createNewSpecification(specId));
    },
    createNewModel: (modelName, model, modelId) => dispatch(createNewModel(modelName, model, modelId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalContainer);
