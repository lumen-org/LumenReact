import React, { Component } from "react";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { addSpecification, selectSpecification } from "../../states/model/actions";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";
import { selectLastCreatedId } from "../../states/model/selector";

class ListModalContainer extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
  };

  state = {
    models: [],
  };

  handleItemSelection = (item) => {
    const {
      updateActiveModel,
      handleModalClose,
      createPlot,
      addSpecifications,
      selectSpecification,
    } = this.props;
    addSpecifications();
    selectSpecification(this.props.lastId);
    console.log(this.props.lastId);
    createPlot(item, this.props.lastId);
    updateActiveModel(item);
    handleModalClose();
    console.log(this.props.lastId);
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
    lastId: selectLastCreatedId(state.model)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),
    createPlot: (activeModel, specification_id) => dispatch(createNewPlot(activeModel, specification_id)),
    // resetSpecifications: () => dispatch(resetSpecifications()),
    addSpecifications: () => dispatch(addSpecification()),
    selectSpecification: (id) => dispatch(selectSpecification(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalContainer);
