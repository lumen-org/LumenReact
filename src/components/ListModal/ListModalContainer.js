import React, { Component } from "react";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
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
  };

  state = {
    models: [],
    fetchStatus: { showAlert: false, error: "" },
  };

  handleModelClone = (modelName) => {};
  handleModelDelete = (modelName) => {};

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

    showHeaders(modelName)
      .then((fields) => {
        createNewModel(modelName, fields);
      })
      .then(() => {
        addSpecifications();
        createNewVisualization();
        createPlot(modelName);
        fillVisualization();
        changeActiveVisualization();
        handleModalClose();
      });
  };

  componentWillMount() {
    showModel()
      .then((models) => {
        this.setState({ models });
      })
      .catch((error) =>
        this.setState({
          fetchStatus: {
            showAlert: true,
            error: "show model error: " + error.toString(),
          },
        })
      );
  }

  render() {
    const { open, handleModalClose } = this.props;
    const { models, fetchStatus } = this.state;

    return (
      <ListModal
        open={open}
        itemList={models}
        handleModalClose={handleModalClose}
        handleItemSelection={this.handleItemSelection}
        handleItemlClone={this.handleModelClone}
        handleItemDelete={this.handleModelDelete}
        fetchStatus={fetchStatus}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewVisualization: () => dispatch(createNewVisualization()),
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),
    changeActiveVisualization: () => dispatch(changeActiveVisualization()),
    createPlot: (activeModel) =>
      dispatch(createNewPlot(activeModel, defaultPlotType)),
    addSpecifications: () => dispatch(createNewSpecification()),
    createNewModel: (modelName, model) =>
      dispatch(createNewModel(modelName, model)),
    fillVisualization: () => dispatch(fillVisualization()),
  };
};

export default connect(null, mapDispatchToProps)(ListModalContainer);
