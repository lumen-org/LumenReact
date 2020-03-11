import React, { Component } from "react";
import PropTypes from "prop-types";
import ListModal from "./ListModal";

class ListModalContainer extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired
  };

  handleSelectModal = model => {
    console.log(model);
  };

  render() {
    const { open, handleModalClose } = this.props;

    return (
      <ListModal
        open={open}
        handleModalClose={handleModalClose}
        handleSelectModal={this.handleSelectModal}
      />
    );
  }
}

export default ListModalContainer;
