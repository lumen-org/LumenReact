import React from "react";
import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";
import ListModal from "./ListModal";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
import {
  showModel,
  showHeaders,
  cloneModel,
  dropModel,
  createEmpmodel,
} from "../../utils/pqlModelQueries";
import { STANDARD_PLOT } from "../../constants/plotTypes";
import {
  changeActiveVisualization,
  createNewVisualization,
  fillVisualization,
} from "../../states/visualizations/actions";
import { createNewModel } from "../../states/models/actions";
import { addAllDimensions } from "../../states/dimensions/actions";
import { STANDARD_SPECIFICATION } from "../../states/specifications/specificationTypes";
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

  handleModelClone = (modelName) => {
    cloneModel(modelName)
      .then((response) => this.getModels())
      .catch((error) => console.log(error));
  };
  handleModelDelete = (modelName) => {
    dropModel(modelName)
      .then((response) => this.getModels())
      .catch((error) => console.log(error));
  };

  handleItemSelection = (modelName) => {
    const {
      changeActiveVisualization,
      handleModalClose,
      createPlot,
      addSpecifications,
      createNewVisualization,
      createNewModel,
      addAllDimensions,
      fillVisualization,
      updateActiveModel,
    } = this.props;
    showHeaders(modelName)
      .then((fields) => {
        createNewModel(modelName, fields);
        updateActiveModel(modelName);
        return fields;
      })
      .then((fields) => {
        addAllDimensions(modelName, fields);
        const specificationId = uuidv4();
        addSpecifications(STANDARD_SPECIFICATION, specificationId);
        createNewVisualization(specificationId);
        createPlot(modelName, defaultPlotType, specificationId);
        fillVisualization();
        changeActiveVisualization();
        createEmpmodel(modelName);
        handleModalClose();
      });
  };

  getModels = () => {
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
  };
  componentDidMount() {
    this.getModels();
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

//getDimensionsOfCurrentModel: getDimensionsOfCurrentModel(state),

const mapDispatchToProps = (dispatch) => {
  return {
    addAllDimensions: (modelName, fields) =>
      dispatch(addAllDimensions(modelName, fields)),
    createNewVisualization: (specificationId) =>
      dispatch(createNewVisualization(specificationId)),
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),

    changeActiveVisualization: () => dispatch(changeActiveVisualization()),
    createPlot: (activeModel, plotType, specificationId) =>
      dispatch(createNewPlot(activeModel, plotType, specificationId)),
    addSpecifications: (specificationType, specificationId) =>
      dispatch(createNewSpecification({ specificationType, specificationId })),
    createNewModel: (modelName, model) =>
      dispatch(createNewModel(modelName, model)),
    fillVisualization: () => dispatch(fillVisualization()),
  };
};

export default connect(null, mapDispatchToProps)(ListModalContainer);
