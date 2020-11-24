import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FieldItemModal from "./FieldItemModal";

class FieldItemModalContainer extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    anchorEl: PropTypes.object,
  };

  state = {};

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
    }
  }

  render() {
    const { isOpen, handleModalClose, title, anchorEl } = this.props;
    const {} = this.state;
    return (
      <FieldItemModal
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        title={title}
        anchorEl={anchorEl}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};
const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldItemModalContainer);
