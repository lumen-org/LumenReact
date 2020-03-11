import React, { Component } from "react";
import { connect } from "react-redux";
import { saveModels, selectModel } from "../../states/app/actions";
import PropTypes from "prop-types";
import ListModal from "./ListModal";

class ListModalContainer extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired
  };

  handleItemSelection = model => {
    const { selectModel } = this.props;
    selectModel(model);
  };

  componentWillMount() {}

  render() {
    const { open, handleModalClose } = this.props;

    return (
      <ListModal
        open={open}
        handleModalClose={handleModalClose}
        handleItemSelection={this.handleItemSelection}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectModel: model => dispatch(selectModel(model)),
    saveModels: models => dispatch(saveModels(models))
  };
};

export default connect(null, mapDispatchToProps)(ListModalContainer);
