import React, { Component } from "react";
import Specification from "./Specification";
import { connect } from "react-redux";
import { selectCurrentSpecification } from "../../states/specifications/selector";

class SpecificationContainer extends React.Component {
  render() {
    console.log(this.props);
    const { specification, facets } = this.props.specifications;
    return <Specification specifications={specification} facets={facets}/>;
  }
}

const mapStateToProps = state => {
  return {
    specifications: selectCurrentSpecification(state.specifications)
  };
};

export default connect(mapStateToProps, null)(SpecificationContainer);
