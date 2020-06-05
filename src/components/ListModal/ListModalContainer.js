import React, { Component } from "react";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData, { fetchModelData } from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";
import { changeActiveVisualization, createNewVisualization } from "../../states/visualizations/actions";
import { createNewModel } from "../../states/models/actions";

class ListModalContainer extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired
  };

  state = {
    models: []
  };

  handleItemSelection = (item) => {
    const {
      changeActiveVisualization,
      handleModalClose,
      createPlot,
      addSpecifications,
      createNewVisualization,
      createNewModel
    } = this.props;
    // even though the dispatches officially are executed sequential the mapStateToProps
    // is not updating in time, that's why we need to ensure the order by
    // making addSpecification a promise
    // Im not sure if I did it correctly
    addSpecifications().then(() => {
        // move into schema redux store to avoid this nested promises
        fetchModelData(item).then((response) => {
            createNewModel(response["Fields"]);
          }
        ).then(() => {
            createPlot(item, this.props.specificationsId);
            createNewVisualization(item, this.props.modelId, this.props.specificationsId, this.props.plotId);
            changeActiveVisualization(this.props.lastCreatedVisualizationId);
            handleModalClose();
          }
        )
        ;
      }
    );
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
    specificationsId: state.specifications.lastCreatedId,
    plotId: state.plots.lastCreatedId,
    modelId: state.models.lastCreatedModelId,
    lastCreatedVisualizationId: state.visualizations.lastCreatedVisualizationId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewVisualization: (modelName, schemaId, specificationId, plotId) =>
      dispatch(createNewVisualization(modelName, schemaId, specificationId, plotId)),
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),
    changeActiveVisualization: (id) => dispatch(changeActiveVisualization(id)),
    createPlot: (activeModel, specification_id) => dispatch(createNewPlot(activeModel, specification_id)),
    // resetSpecifications: () => dispatch(resetSpecifications()),
    addSpecifications: () => {
      return dispatch(createNewSpecification());
    },
    createNewModel: (model) => dispatch(createNewModel(model))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalContainer);
