import React, { Component } from "react";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { createNewSpecification } from "../../states/specifications/actions";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData, { fetchSchemeData } from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";
import { changeActiveModel, createNewModel } from "../../states/models/actions";
import { createNewScheme } from "../../states/schemes/actions";

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
      changeActiveModel,
      handleModalClose,
      createPlot,
      addSpecifications,
      createNewModel,
      createNewScheme
    } = this.props;
    // even though the dispatches officially are executed sequential the mapStateToProps
    // is not updating in time, that's why we need to ensure the order by
    // making addSpecification a promise
    // Im not sure if I did it correctly
    const modelname = this.props.modelName;
    let body = {
      "FROM": "emp-iris",
      "PCI_GRAPH.GET": true,
    };
    fetchData(BASE_URL, body).then((response) => console.log(response)).catch((error) => console.log(error));
    addSpecifications().then(() => {
        // move into schema redux store to avoid this nested promises
        fetchSchemeData(item).then((response) => {
            console.log(response);
            createNewScheme(response);
          }
        ).then(() => {
            createPlot(item, this.props.specificationsId);
            createNewModel(item, this.props.schemeId, this.props.specificationsId, this.props.plotId);
            changeActiveModel(this.props.lastCreatedModelId);
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
    schemeId: state.schemes.lastCreatedId,
    lastCreatedModelId: state.models.lastCreatedModelId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewModel: (modelName, schemaId, specificationId, plotId) =>
      dispatch(createNewModel(modelName, schemaId, specificationId, plotId)),
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),
    changeActiveModel: (id) => dispatch(changeActiveModel(id)),
    createPlot: (activeModel, specification_id) => dispatch(createNewPlot(activeModel, specification_id)),
    // resetSpecifications: () => dispatch(resetSpecifications()),
    addSpecifications: () => {
      return dispatch(createNewSpecification());
    },
    createNewScheme: (scheme) => dispatch(createNewScheme(scheme))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalContainer);
