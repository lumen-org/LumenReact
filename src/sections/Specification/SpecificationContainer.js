import React, { Component } from "react";
import Specification from "./Specification";
import { connect } from "react-redux";
import { selectCurrentSpecification } from "../../states/model/selector";

class SpecificationContainer extends React.Component {
  render() {
    const { specification, facets } = this.props.specifications;
    return <Specification specifications={specification} facets={facets}/>;
  }
}

const mapStateToProps = state => {
  return {
    specifications: selectCurrentSpecification(state.model)
  };
};

export default connect(mapStateToProps, null)(SpecificationContainer);
