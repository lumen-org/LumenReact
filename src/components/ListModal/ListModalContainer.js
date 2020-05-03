import React, { Component } from "react";
import { connect } from "react-redux";
import { updateActiveModel } from "../../states/app/actions";
import { resetSpecifications } from "../../states/model/actions";
import { createNewPlot } from "../../states/plots/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";

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
      resetSpecifications,
    } = this.props;
    updateActiveModel(item);
    createPlot(item);
    resetSpecifications();
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveModel: (model) => dispatch(updateActiveModel(model)),
    createPlot: (activeModel) => dispatch(createNewPlot(activeModel)),
    resetSpecifications: () => dispatch(resetSpecifications()),
  };
};

export default connect(null, mapDispatchToProps)(ListModalContainer);
