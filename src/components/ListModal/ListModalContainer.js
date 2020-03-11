import React, { Component } from "react";
import { connect } from "react-redux";
import { selectModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";
import fetchData from "../../utils/fetch";
import { BASE_URL, FETCH_ALL_MODEL_NAME } from "../../constants/query";

class ListModalContainer extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired
  };

  state = {
    models: []
  };

  handleItemSelection = item => {
    const { selectModel, handleModalClose } = this.props;
    selectModel(item);
    handleModalClose();
  };

  componentWillMount() {
    fetchData(BASE_URL, FETCH_ALL_MODEL_NAME).then(response =>
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

const mapDispatchToProps = dispatch => {
  return {
    selectModel: model => dispatch(selectModel(model))
  };
};

export default connect(null, mapDispatchToProps)(ListModalContainer);
