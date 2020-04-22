import React, { Component } from "react";
import PropTypes from "prop-types";
import Facet from "./Facet";
import { connect } from "react-redux";

class SpecificationContainer extends React.Component {
  render() {
    const { specifications } = this.props;
    return <Facet specifications={specifications} />;
  }
}

const mapStateToProps = state => {
  return {
    specifications: state.model.specifications
  };
};

export default connect(mapStateToProps, null)(SpecificationContainer);
