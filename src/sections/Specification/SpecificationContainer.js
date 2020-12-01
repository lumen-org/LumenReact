import React from "react";
import { connect } from "react-redux";
import { selectActiveSpecificationId } from "../../states/visualizations/selector";
import { EMPTY } from "../../states/constants";
import Specification from "./Specification";

class SpecificationContainer extends React.Component {
  render() {
    return this.props.activeSpecification !== EMPTY && <Specification
      specificationType={this.props.specifications[this.props.activeSpecification].specificationType}
      specificationId={this.props.activeSpecification}
    />
  }
}

const mapStateToProps = state => {
  return {
    specifications: state.specifications.specifications.byId,
    activeSpecification: selectActiveSpecificationId(state)
  };
};

export default connect(mapStateToProps, null)(SpecificationContainer);
