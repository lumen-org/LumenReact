import React, { Component } from "react";
import PropTypes from "prop-types";
import Specification from "./Specification";
import { connect } from "react-redux";
import { selectCurrentSpecification } from "../../states/model/selector";

class SpecificationContainer extends React.Component {
  render() {
    const { specifications } = this.props;
    return <Specification specifications={specifications} />;
  }
}

const mapStateToProps = state => {
  return {
    specifications: selectCurrentSpecification(state)
  };
};

export default connect(mapStateToProps, null)(SpecificationContainer);
