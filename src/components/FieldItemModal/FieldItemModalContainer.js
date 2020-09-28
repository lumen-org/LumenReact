import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FieldItemModal from "./FieldItemModal";

class FieldItemModalContainer extends React.Component {
  static propTypes = {};

  state = {};

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
    }
  }

  render() {
    const {} = this.props;
    const {} = this.state;
    return <FieldItemModal />;
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
